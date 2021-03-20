using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DeveloperDemo.Models
{
    public class Developer
    {
        [Key]
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required(AllowEmptyStrings = false)]
        [Display(Name = "Job Title")]
        public string JobTitle { get; set; }
    }
}