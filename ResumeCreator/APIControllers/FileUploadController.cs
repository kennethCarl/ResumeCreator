using iTextSharp.text;
using iTextSharp.text.pdf;
using ResumeCreator.ActionFilter;
using ResumeCreator.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace ResumeCreator.ApiControllers
{
    public class FileUploadController : ApiController
    {
        public ResumeEntities db = new ResumeEntities();
        [HttpPost]
        [FilterHTTPRequest]
        public async Task<IHttpActionResult> PostAsync(string username)
        {
            Response response = new Response();
            response.status = "FAILURE";
            string filePath = "";
            string[] filePath1 = new string[2];
            if (Request.Content.IsMimeMultipartContent())
            {
                string uploadPath = HttpContext.Current.Server.MapPath("~/ResumeList/" + username);

                //Remove images that is save more than 30 minutes
                string [] files = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\temporary");
                foreach (string file in files) 
                {
                    FileInfo fileInfo = new FileInfo(file);
                    double diffTime = (DateTime.Now - fileInfo.LastWriteTime).TotalMinutes;
                    if (diffTime > 30)
                        File.Delete(file);
                }

                if (Directory.Exists(uploadPath))
                {
                    MyStreamProvider streamProvider = new MyStreamProvider(uploadPath);

                    //Save File asychronously
                    await Request.Content.ReadAsMultipartAsync(streamProvider);
                    if (!username.Equals("temporary"))
                    {
                        //Loop file details
                        foreach (var file in streamProvider.FileData)
                        {
                            FileInfo fi = new FileInfo(file.LocalFileName);
                            filePath = uploadPath + "\\" + fi.Name;
                            string informationPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\Information.txt";

                            using (System.IO.StreamWriter fileData = new System.IO.StreamWriter(informationPath, true))
                            {
                                fileData.WriteLine(@"ResumeList" + "/" + username + "/" + fi.Name);
                            }
                        }
                    }
                }
                response.status = "SUCCESS";
            }
            else
            {
                response.message = "Invalid Request!";
            }

            return Ok(response);
        }

        [HttpPost]
        public IHttpActionResult PostPDF(User user){
            Byte[] bytes;

            using (var ms = new MemoryStream())
            {

                //Create an iTextSharp Document which is an abstraction of a PDF but **NOT** a PDF
                using (var doc = new Document())
                {

                    //Create a writer that's bound to our PDF abstraction and our stream
                    using (var writer = PdfWriter.GetInstance(doc, ms))
                    {

                        //Open the document for writing
                        doc.Open();

                        //Our sample HTML and CSS
                        var content = user.Objectives;
                        var css = @".test{font-size:500%; font-family:'Times New Roman'; background-color: black;}";

                        /**************************************************
                         * Example #1                                     *
                         *                                                *
                         * Use the built-in HTMLWorker to parse the HTML. *
                         * Only inline CSS is supported.                  *
                         * ************************************************/

                        //Create a new HTMLWorker bound to our document
                        using (var htmlWorker = new iTextSharp.text.html.simpleparser.HTMLWorker(doc))
                        {

                            //HTMLWorker doesn't read a string directly but instead needs a TextReader (which StringReader subclasses)
                            using (var sr = new StringReader(content))
                            {

                                //Parse the HTML
                                htmlWorker.Parse(sr);
                            }
                        }

                        /**************************************************
                         * Example #2                                     *
                         *                                                *
                         * Use the XMLWorker to parse the HTML.           *
                         * Only inline CSS and absolutely linked          *
                         * CSS is supported                               *
                         * ************************************************/

                        //XMLWorker also reads from a TextReader and not directly from a string
                        using (var srHtml = new StringReader(content))
                        {

                            //Parse the HTML
                            iTextSharp.tool.xml.XMLWorkerHelper.GetInstance().ParseXHtml(writer, doc, srHtml);
                        }

                        /**************************************************
                         * Example #3                                     *
                         *                                                *
                         * Use the XMLWorker to parse HTML and CSS        *
                         * ************************************************/

                        //In order to read CSS as a string we need to switch to a different constructor
                        //that takes Streams instead of TextReaders.
                        //Below we convert the strings into UTF8 byte array and wrap those in MemoryStreams
                        using (var msCss = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(css)))
                        {
                            using (var msHtml = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(content)))
                            {
                                //Parse the HTML
                                iTextSharp.tool.xml.XMLWorkerHelper.GetInstance().ParseXHtml(writer, doc, msHtml, msCss);
                            }
                        }

                        doc.Close();
                    }
                }

                //After all of the PDF "stuff" above is done and closed but **before** we
                //close the MemoryStream, grab all of the active bytes from the stream
                bytes = ms.ToArray();
            }
            var pathToSave = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList/temporary/" + user.FirstName.ToLower() + ".pdf";
            System.IO.File.WriteAllBytes(pathToSave, bytes);
            return Ok();
        }

        [HttpGet]
        [FilterAppDownload]
        public HttpResponseMessage Get(string fileName, string token)
        {
            HttpResponseMessage result = null;
            var localFilePath = AppDomain.CurrentDomain.BaseDirectory + "apps/" + fileName;

            // check if parameter is valid
            if (String.IsNullOrEmpty(fileName))
            {
                result = Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            // check if file exists on the server
            else if (!File.Exists(localFilePath))
            {
                result = Request.CreateResponse(HttpStatusCode.Gone);
            }
            else
            {// serve the file to the client
                result = Request.CreateResponse(HttpStatusCode.OK);
                result.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
                result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                result.Content.Headers.ContentDisposition.FileName = fileName;
            }

            return result;
        }
    }
}


