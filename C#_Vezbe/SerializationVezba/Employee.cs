using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SerializationVezba
{
    [Serializable]
    public class Employee
    {
        public string Name { get; set; }
        public Employee Manager { get; set; }
        public bool ShouldSerializeManager()
        {
            return (Manager != this);
        }
    }
}
