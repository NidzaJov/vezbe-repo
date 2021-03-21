using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SerializationVezba
{
    [Serializable]
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedDate { get; set; }
        public IList<string> Roles { get; set; }
        public Student(int iD, string name, string email, bool active, DateTime createdDate, IList<string> roles)
        {
            ID = iD;
            Name = name;
            Email = email;
            Active = active;
            CreatedDate = createdDate;
            Roles = roles;
        }
    }
}
