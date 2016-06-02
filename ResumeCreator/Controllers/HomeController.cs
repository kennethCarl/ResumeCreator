using Microsoft.Office.Interop.Word;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace ResumeCreator.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Resume()
        {
            return View();
        }

        public ActionResult Ongoing()
        {
            return View();
        }

        public ActionResult CreateResume()
        {
            return View();
        }
        
        public FileStreamResult DownloadMSResume(int template, string fname)
        {

            var fileName = string.Format("{0}.doc", fname);
            string html = "", newLine = "";
            string[] lines;

            lines = System.IO.File.ReadAllLines(Server.MapPath("/templates/" + template.ToString() + ".txt"));

            foreach (string line in lines)
            {
                if (line.Contains("UserName"))
                {
                    newLine = line.Replace("UserName", "Kenneth Carl Nacua Ybañez");
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else if (line.Contains("UserAddress"))
                {
                    newLine = line.Replace("UserAddress", "Bliss Pajac Lapu-Lapu City");
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else if (line.Contains("UserContactNo"))
                {
                    newLine = line.Replace("UserContactNo", "09434364318");
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else if (line.Contains("UserEmail"))
                {
                    newLine = line.Replace("UserEmail", "kennethcarlybanez@gmail.com");
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else if (line.Contains("UserImage"))
                {
                    newLine = line.Replace("UserImage", Server.MapPath("/userimages/carl.png"));
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else if (line.Contains("UserObjective"))
                {
                    newLine = line.Replace("UserObjective", "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.");
                    newLine = newLine.Replace("ñ", "n");
                    newLine = newLine.Replace("Ñ", "N");
                    html = html + newLine;
                }
                else
                    html = html + line;
            }
            Response.AddHeader("Content-Disposition", "inline;filename=" + fileName);
            return new FileStreamResult(WordStream(html), "application/msword");
        }

        private static Stream WordStream(string body)
        {
            var ms = new MemoryStream();

            byte[] byteInfo = Encoding.ASCII.GetBytes(body);
            ms.Write(byteInfo, 0, byteInfo.Length);
            ms.Position = 0;

            return ms;
        }
        
            
        //public void saveWordDocument(string html)
        //{
        //    string fileName = @"C:\users\public\documents\DocumentEx.docx";

        //    // Create a document. 
        //    using (WordprocessingDocument myDocument =
        //        WordprocessingDocument.Create(fileName, WordprocessingDocumentType.Document))
        //    {
        //        // Add a main part. 
        //        MainDocumentPart mainPart = myDocument.AddMainDocumentPart();

        //        // Create the document structure.
        //        mainPart.Document = new Document();
        //        Body body = mainPart.Document.AppendChild(new Body());
        //        Paragraph para = body.AppendChild(new Paragraph());
        //        Run run = para.AppendChild(new Run());

        //        // Add some text to the document.
        //        run.AppendChild(new Text("Hello, World!"));
        //    }
        //}
    }
}