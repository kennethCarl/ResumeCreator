using Microsoft.Office.Interop.Word;
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
