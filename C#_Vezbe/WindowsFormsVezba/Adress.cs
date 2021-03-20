using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsVezba
{
    public partial class Adress : UserControl
    {
        public string StreetAdress { get; set; }
        public string City { get; set; }
        public int CountryId { get; set; }
        public int PostCode { get; set; }
        public Adress()
        {
            InitializeComponent();
            this.Load += Adress_Load;
        }

        private void Adress_Load(object sender, EventArgs e)
        {
            Country c = new Country();
            var countries = c.GetCountries();
            comboBoxCountry.DataSource = countries;
            comboBoxCountry.DisplayMember = "Name";
            comboBoxCountry.ValueMember = "ID";
            comboBoxCountry.SelectedIndex = 0;
            comboBoxCountry.SelectedValue = "1";
        }

        private void textboxStreetAdress_TextChanged(object sender, EventArgs e)
        {
            this.StreetAdress = textboxStreetAdress.Text;
        }

        private void textBoxCity_TextChanged(object sender, EventArgs e)
        {
            this.City = textBoxCity.Text;
        }

        private void textBoxPostCode_TextChanged(object sender, EventArgs e)
        {
            this.PostCode = int.Parse(textBoxPostCode.Text);
        }

        private void comboBoxCountry_SelectedIndexChanged(object sender, EventArgs e)
        {
            Country selectedcountry = comboBoxCountry.SelectedValue as Country;
            this.CountryId = selectedcountry.ID;
        }
    }
}
