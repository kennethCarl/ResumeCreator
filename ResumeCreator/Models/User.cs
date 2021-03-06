//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ResumeCreator.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public User()
        {
            this.CharacterReferences = new HashSet<CharacterReference>();
            this.PostGraduates = new HashSet<PostGraduate>();
            this.Primaries = new HashSet<Primary>();
            this.Secondaries = new HashSet<Secondary>();
            this.Skills = new HashSet<Skill>();
            this.Strengths = new HashSet<Strength>();
            this.Tertiaries = new HashSet<Tertiary>();
            this.Trainings = new HashSet<Training>();
            this.WorkExperiences = new HashSet<WorkExperience>();
        }
    
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string ImageName { get; set; }
        public string Address { get; set; }
        public string ContactNo { get; set; }
        public string EmailAddress { get; set; }
        public string Objectives { get; set; }
        public Nullable<int> Age { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string Citizenship { get; set; }
        public Nullable<int> Template { get; set; }
        public Nullable<int> Status { get; set; }
        public string Hobbies { get; set; }
    
        public virtual ICollection<CharacterReference> CharacterReferences { get; set; }
        public virtual ICollection<PostGraduate> PostGraduates { get; set; }
        public virtual ICollection<Primary> Primaries { get; set; }
        public virtual ICollection<Secondary> Secondaries { get; set; }
        public virtual ICollection<Skill> Skills { get; set; }
        public virtual ICollection<Strength> Strengths { get; set; }
        public virtual ICollection<Tertiary> Tertiaries { get; set; }
        public virtual ICollection<Training> Trainings { get; set; }
        public virtual ICollection<WorkExperience> WorkExperiences { get; set; }
    }
}
