using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsVezba
{
    class Country
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public Country()
        {

        }

        public Country(int iD, string code, string name)
        {
            ID = iD;
            Code = code;
            Name = name;
        }

        public IList<Country> GetCountries()
        {
            var countries = new List<Country>()
            {
                new Country(1, "RS", "Serbia"),
                new Country(2, "MK", "Macedonia"),
                new Country(3, "GR", "Sreece")
            };
            return countries;
        }
    }
}
