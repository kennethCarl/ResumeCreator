using Microsoft.Office.Interop.Word;
using ResumeCreator.Models;
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

        public FileStreamResult DownloadMSResume()
        {

            var fileName = string.Format("{0}.doc", "myresume");
            string lines;

            lines = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + @"templates\container.txt");

            Response.AddHeader("Content-Disposition", "inline;filename=" + fileName);
            return new FileStreamResult(WordStream(lines), "application/msword");
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