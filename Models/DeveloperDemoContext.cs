using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DeveloperDemo.Models
{
    public class DeveloperDemoContext : DbContext
    {
        public DbSet<Developer> Developers { get; set; }
    }
}