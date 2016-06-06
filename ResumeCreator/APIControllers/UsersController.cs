using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ResumeCreator.Models;
using System.IO;
using System.Text;

namespace ResumeCreator.APIControllers
{
    public class UsersController : ApiController
    {
        private ResumeEntities db = new ResumeEntities();
        Response response = new Response();
        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(string username)
        {

            //using (var doc = new WordApplication(AppDomain.CurrentDomain.BaseDirectory + "@ResumeList\test.docx"))
            //{
            //    doc.WriteHeader("<h1>Header text</h1>");
            //    doc.WriteFooter("<h1>Footer text</h1>");
            //    doc.WriteBody("<div style='font-size: 100px;'></div>");
            //    doc.Save();
            //    doc.Dispose();
            //}

            response.status = "FAILURE";
            string informationPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Information.txt";
            string skillPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Skill.txt";
            string strengthPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Strengths.txt";
            string postGraduatePath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "PostGraduate.txt";
            string tertiaryPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Tertiary.txt";
            string secondaryPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Secondary.txt";
            string primaryPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Primary.txt";
            string workExperiencePath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "WorkExperience.txt";
            string trainingPath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "Training.txt";
            string characterReferencePath = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username + "\\" + "CharacterReference.txt";
            int index = 0, iterationCount = 0;
            if (Directory.Exists(AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + username))
            {
                User user = new User();
                //Information
                if (System.IO.File.Exists(informationPath))
                {
                    string[] information = System.IO.File.ReadAllLines(informationPath);
                    //user.FirstName
                    user.FirstName = information[0];
                    user.MiddleName = information[1];
                    user.LastName = information[2];
                    user.Address = information[3];
                    user.ContactNo = information[4];
                    user.EmailAddress = information[5];
                    user.Objectives = information[6];
                    user.Age = Convert.ToInt32(information[7]);
                    user.DateOfBirth = Convert.ToDateTime(information[8]);
                    user.Gender = information[9];
                    user.CivilStatus = information[10];
                    user.Height = information[11];
                    user.Weight = information[12];
                    user.Citizenship = information[13];
                    user.Hobbies = information[14];
                    user.Template = Convert.ToInt32(information[15]);
                    user.ImageName = information[16];
                    response.objParam1 = user;
                }
                //Skill
                if (System.IO.File.Exists(skillPath))
                {
                    string[] skill = System.IO.File.ReadAllLines(skillPath);
                    for (int i = 0; i < skill.Length; i++)
                    {
                        Skill skills = new Skill();
                        skills.Description = skill[i];
                        user.Skills.Add(skills);
                    }
                }
                //Strengths
                if (System.IO.File.Exists(strengthPath))
                {
                    string[] strength = System.IO.File.ReadAllLines(strengthPath);
                    for (int i = 0; i < strength.Length; i++)
                    {
                        Strength strengths = new Strength();
                        strengths.Description = strength[i];
                        user.Strengths.Add(strengths);
                    }
                }
                //PostGraduate
                if (System.IO.File.Exists(postGraduatePath))
                {
                    string[] postGraduate = System.IO.File.ReadAllLines(postGraduatePath);
                    iterationCount = postGraduate.Length / 3;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        PostGraduate postGraduates = new PostGraduate();
                        postGraduates.School = postGraduate[index];
                        index = index + 1;
                        postGraduates.Degree = postGraduate[index];
                        index = index + 1;
                        postGraduates.Address = postGraduate[index];
                        index = index + 1;
                        user.PostGraduates.Add(postGraduates);
                    }
                }
                //Tertiary
                if (System.IO.File.Exists(tertiaryPath))
                {
                    string[] tertiary = System.IO.File.ReadAllLines(tertiaryPath);
                    iterationCount = tertiary.Length / 3;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        Tertiary tertiaries = new Tertiary();
                        tertiaries.School = tertiary[index];
                        index = index + 1;
                        tertiaries.Degree = tertiary[index];
                        index = index + 1;
                        tertiaries.Address = tertiary[index];
                        index = index + 1;
                        user.Tertiaries.Add(tertiaries);
                    }
                }
                //Secondary
                if (System.IO.File.Exists(secondaryPath))
                {
                    string[] secondary = System.IO.File.ReadAllLines(secondaryPath);
                    iterationCount = secondary.Length / 2;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        Secondary secondaries = new Secondary();
                        secondaries.School = secondary[index];
                        index = index + 1;
                        secondaries.Address = secondary[index];
                        index = index + 1;
                        user.Secondaries.Add(secondaries);
                    }
                }
                //Primary
                if (System.IO.File.Exists(primaryPath))
                {
                    string[] primary = System.IO.File.ReadAllLines(primaryPath);
                    iterationCount = primary.Length / 2;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        Primary primaries = new Primary();
                        primaries.School = primary[index];
                        index = index + 1;
                        primaries.Address = primary[index];
                        index = index + 1;
                        user.Primaries.Add(primaries);
                    }
                }
                //Work Experience
                if (System.IO.File.Exists(workExperiencePath))
                {
                    string[] workExperience = System.IO.File.ReadAllLines(workExperiencePath);
                    iterationCount = workExperience.Length / 5;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        WorkExperience workExperiences = new WorkExperience();
                        workExperiences.Company = workExperience[index];
                        index = index + 1;
                        workExperiences.Address = workExperience[index];
                        index = index + 1;
                        workExperiences.Period = workExperience[index];
                        index = index + 1;
                        workExperiences.Position = workExperience[index];
                        index = index + 1;
                        workExperiences.MainRole = workExperience[index];
                        index = index + 1;
                        user.WorkExperiences.Add(workExperiences);
                    }
                }
                //Training
                if (System.IO.File.Exists(trainingPath))
                {
                    string[] training = System.IO.File.ReadAllLines(trainingPath);
                    iterationCount = training.Length / 3;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        Training trainings = new Training();
                        trainings.Name = training[index];
                        index = index + 1;
                        trainings.Description = training[index];
                        index = index + 1;
                        trainings.Period = training[index];
                        index = index + 1;
                        user.Trainings.Add(trainings);
                    }
                }
                //character Reference
                if (System.IO.File.Exists(characterReferencePath))
                {
                    string[] characterReference = System.IO.File.ReadAllLines(characterReferencePath);
                    iterationCount = characterReference.Length / 3;
                    index = 0;
                    for (int i = 0; i < iterationCount; i++)
                    {
                        CharacterReference characterReferences = new CharacterReference();
                        characterReferences.Name = characterReference[index];
                        index = index + 1;
                        characterReferences.Profession = characterReference[index];
                        index = index + 1;
                        characterReferences.ContactNo = characterReference[index];
                        index = index + 1;
                        user.CharacterReferences.Add(characterReferences);
                    }
                }
                response.status = "SUCCESS";
            }
            else
                response.message = "User not found.";

            return Ok(response);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user, int type)
        {
            response.status = "FAILURE";
            try {
                if (!ModelState.IsValid)
                {
                    response.message = "Bad Request.";
                }
                else
                {
                    if (type != 1)
                    {
                        string path = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + user.FirstName.ToLower().Replace(" ", "") + user.MiddleName.ToLower().Replace(" ", "") + user.LastName.ToLower().Replace(" ", "");
                        //Check if file exist
                        if (System.IO.Directory.Exists(path))
                        {
                            //Remove File
                            //Directory.Delete(path, true);
                            response.message = "User already exist";
                        }
                        else
                        {
                            List<string> information = new List<string>();
                            List<string> skills = new List<string>();
                            List<string> strengths = new List<string>();
                            List<string> postGraduate = new List<string>();
                            List<string> tertiary = new List<string>();
                            List<string> secondary = new List<string>();
                            List<string> primary = new List<string>();
                            List<string> workExperience = new List<string>();
                            List<string> training = new List<string>();
                            List<string> characterReference = new List<string>();

                            information.Add(user.FirstName);
                            information.Add(user.MiddleName);
                            information.Add(user.LastName);
                            information.Add(user.Address);
                            information.Add(user.ContactNo);
                            information.Add(user.EmailAddress);
                            information.Add(user.Objectives);
                            information.Add(user.Age.ToString());
                            information.Add(user.DateOfBirth.ToString());
                            information.Add(user.Gender);
                            information.Add(user.CivilStatus);
                            information.Add(user.Height);
                            information.Add(user.Weight);
                            information.Add(user.Citizenship);
                            information.Add(user.Hobbies);
                            information.Add(user.Template.ToString());

                            foreach (Skill skillsHolder in user.Skills)
                                skills.Add(skillsHolder.Description);

                            foreach (Strength strengthHolder in user.Strengths)
                                strengths.Add(strengthHolder.Description);

                            foreach (PostGraduate pg in user.PostGraduates)
                            {
                                postGraduate.Add(pg.School);
                                postGraduate.Add(pg.Degree);
                                postGraduate.Add(pg.Address);
                            }

                            foreach (Tertiary t in user.Tertiaries)
                            {
                                tertiary.Add(t.School);
                                tertiary.Add(t.Degree);
                                tertiary.Add(t.Address);
                            }

                            foreach (Secondary s in user.Secondaries)
                            {
                                secondary.Add(s.School);
                                secondary.Add(s.Address);
                            }

                            foreach (Primary p in user.Primaries)
                            {
                                primary.Add(p.School);
                                primary.Add(p.Address);
                            }

                            foreach (WorkExperience we in user.WorkExperiences)
                            {
                                workExperience.Add(we.Company);
                                workExperience.Add(we.Address);
                                workExperience.Add(we.Period);
                                workExperience.Add(we.Position);
                                workExperience.Add(we.MainRole);
                            }

                            foreach (Training ts in user.Trainings)
                            {
                                training.Add(ts.Name);
                                training.Add(ts.Description);
                                training.Add(ts.Period);
                            }

                            foreach (CharacterReference cr in user.CharacterReferences)
                            {
                                characterReference.Add(cr.Name);
                                characterReference.Add(cr.Profession);
                                characterReference.Add(cr.ContactNo);
                            }

                            //Create Folder in application path
                            string dir = AppDomain.CurrentDomain.BaseDirectory + @"ResumeList\" + user.FirstName.ToLower().Replace(" ", "") + user.MiddleName.ToLower().Replace(" ", "") + user.LastName.ToLower().Replace(" ", "");
                            System.IO.Directory.CreateDirectory(dir);

                            //Save Information
                            System.IO.File.WriteAllLines(dir + "\\" + "Information.txt", information);
                            //Save Skill
                            if (user.Skills.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Skill.txt", skills);
                            //Save Strengths
                            if (user.Strengths.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Strengths.txt", strengths);
                            //Save Post Graduate
                            if (user.PostGraduates.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "PostGraduate.txt", postGraduate);
                            //Save Tertiary
                            if (user.Tertiaries.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Tertiary.txt", tertiary);
                            //Save Secondary
                            if (user.Secondaries.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Secondary.txt", secondary);
                            //Save Primary
                            if (user.Primaries.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Primary.txt", primary);
                            //Save WorkExperience
                            if (user.WorkExperiences.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "WorkExperience.txt", workExperience);
                            //Save Training
                            if (user.Trainings.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "Training.txt", training);
                            //Save CharacterReference
                            if (user.CharacterReferences.Count() > 0) System.IO.File.WriteAllLines(dir + "\\" + "CharacterReference.txt", characterReference);

                            //if(File.Exists(dir + "\\" + "Information.txt") && File.Exists(dir + "\\" + "Skill.txt")
                            //    && File.Exists(dir + "\\" + "Strengths.txt") && File.Exists(dir + "\\" + "PostGraduate.txt")
                            //    && File.Exists(dir + "\\" + "Tertiary.txt") && File.Exists(dir + "\\" + "Secondary.txt")
                            //    && File.Exists(dir + "\\" + "Primary.txt") && File.Exists(dir + "\\" + "WorkExperience.txt")
                            //    && File.Exists(dir + "\\" + "Training.txt") && File.Exists(dir + "\\" + "CharacterReference.txt"))
                            //    response.status = "SUCCESS";
                            //else
                            //    response.message = "Error has occured during saving, please save again.";
                            response.status = "SUCCESS";
                        }
                    }
                    else
                    {
                        string container;

                        container = "<!DOCTYPE html><html " +
                                   "xmlns:o='urn:schemas-microsoft-com:office:office' " +
                                   "xmlns:w='urn:schemas-microsoft-com:office:word'" +
                                   "xmlns='http://www.w3.org/TR/REC-html40'>" +
                                   "<head><title>Time</title>";

                        //'The setting specifies document's view after it is downloaded as Print
                        //'instead of the default Web Layout
                        container = container + "<!--[if gte mso 9]>" +
                                                 "<xml>" +
                                                 "<w:WordDocument>" +
                                                 "<w:View>Print</w:View>" +
                                                 "<w:Zoom>90</w:Zoom>" +
                                                 "<w:DoNotOptimizeForBrowser/>" +
                                                 "</w:WordDocument>" +
                                                 "</xml>" +
                                                 "<![endif]--></head><body lang=EN-US>Content</body></html>";

                        container = container.Replace("Content", user.Objectives);
                        string[] lines = new string[1] { container };
                        System.IO.File.WriteAllLines(AppDomain.CurrentDomain.BaseDirectory + @"templates\container.txt", lines);
                        response.status = "SUCCESS";
                    }
                }
            }
            catch(Exception e){
                response.message = e.InnerException.InnerException.Message.ToString();
            }
            return Ok(response);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}