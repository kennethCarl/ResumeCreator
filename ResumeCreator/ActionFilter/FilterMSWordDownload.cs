using ResumeCreator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Mvc.Filters;

namespace ResumeCreator.ActionFilter
{
    class FilterMSWordDownload : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            try
            {
                string tokenValue = actionContext.HttpContext.Request.Url.PathAndQuery.Split('@')[1].ToString();
               
                //var tokenValue = headers["Token"];
                TokenGenerator tokenGenerator = new TokenGenerator();
                string decryptedToken = tokenGenerator.Decrypt(tokenValue.Split(':')[1]);
                // Validate Token
                if (!decryptedToken.Equals("ARJOCAMAHAMAGEAPP"))
                    actionContext.HttpContext.Response.StatusCode = Convert.ToInt16(HttpStatusCode.Unauthorized);
            }
            catch
            {
                actionContext.HttpContext.Response.StatusCode = Convert.ToInt16(HttpStatusCode.Unauthorized);
            }
            base.OnActionExecuting(actionContext);
        }
    }
}
