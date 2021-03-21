using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SerializationVezba
{
    [Serializable]
    public class Tutorial
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
