using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsVezba
{
    class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public IList<Student> GetStudents()
        {
            IList<Student> studentlist = new List<Student>()
            {
                new Student{ ID =1, Name = "Acko", Age = 21},
                new Student{ ID =2, Name = "Bracko", Age = 23},
                new Student{ ID =3, Name = "Macko", Age = 22},
                new Student{ ID =4, Name = "Sacko", Age = 25},
                new Student{ ID =5, Name = "Lacko", Age = 26},
                new Student{ ID =6, Name = "Vecko", Age = 29}
            };
            return studentlist;
        }
    }
}
