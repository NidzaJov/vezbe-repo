using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsVezba
{
    public partial class Form2 : Form
    {
        private Adress _address;
        public Form2()
        {
            InitializeComponent();
            this.Load += Form2_Load;
            this.button1.Click += button1_Click;
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            Student s = new Student();
            var StudentList = s.GetStudents();
            populateList(StudentList);
            listVievStudents.ColumnClick += ListVievStudents_ColumnClick;
        }

        private void ListVievStudents_ColumnClick(object sender, ColumnClickEventArgs e)
        {
            listVievStudents.ListViewItemSorter = new ListViewItemCompareer(e.Column);
        }

        private void populateList(IList<Student> students) 
        {
            listVievStudents.Columns.Add("ID");
            listVievStudents.Columns.Add("Name");
            listVievStudents.Columns.Add("Age");
            foreach (var student in students)
            {
                ListViewItem item = new ListViewItem(new string[]
                {
                    student.ID.ToString(),
                    student.Name,
                    student.Age.ToString()
                }); ;
                listVievStudents.Items.Add(item);
            }
        }

        class ListViewItemCompareer : IComparer
        {
            private int col;
            public ListViewItemCompareer()
            {
                col = 0;
            }
            public ListViewItemCompareer(int column)
            {
                col = column;
            }
            public int Compare(object x, object y)
            {
                return String.Compare(((ListViewItem)x).SubItems[col].Text, ((ListViewItem)y).SubItems[col].Text);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            Form1 form1 = new Form1();
            form1.Show();
        }

        private void Form2_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string streetadress = adresscontrol1.StreetAdress;
            string city = adresscontrol1.City;
            int postcode = adresscontrol1.PostCode;
            int countryiId = adresscontrol1.CountryId;
            int[] students = new int[listVievStudents.SelectedItems.Count];
            int i = 0;
            foreach (ListViewItem item in listVievStudents.SelectedItems)
            {
                var id = item.Text;
                var name = item.SubItems[1].Text;
                var age = item.SubItems[2].Text;
                students[i] = int.Parse(id);
                i++;
            }
        }
    }
}
