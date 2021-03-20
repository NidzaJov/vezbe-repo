using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsVezba
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            this.DragEnter += Form1_DragEnter;
            this.DragOver += Form1_DragOver;
            this.DragDrop += Form1_DragDrop;
            this.DragLeave += Form1_DragLeave;
            textBox1.TextChanged += textBox1_TextChanged;
            checkBox1.CheckedChanged += checkBox1_CheckedChanged;
            linkLabelGoogle.Click += linkLabelGoogle_Click;
            this.FormClosing += Form1_FormClosing;
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }

        private void Form1_DragDrop(object sender, DragEventArgs e)
        {
            eventsLabel.Text = "Drag drop fires";
        }

        private void Form1_DragOver(object sender, DragEventArgs e)
        {
            eventsLabel.Text = "Drag over fires";
        }

        private void Form1_DragEnter(object sender, DragEventArgs e)
        {
            eventsLabel.Text = "Drag enter fires";
        }

        private void Form1_DragLeave(object sender, EventArgs e)
        {
            eventsLabel.Text = "Drag leave fires";
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            eventsLabel.Text = "Text has changed";
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            eventsLabel.Text = "Checkbox has changed";
        }

        private void checkBox1_MouseHover(object sender, EventArgs e)
        {
            eventsLabel.Text = "You should agree on your terms and conditions";
        }

        private void linkLabelGoogle_Click(object sender, EventArgs e)
        {
            Process.Start("https://www.google.com");
            eventsLabel.Text = "Web browser is just opened";
        }

        private void buttonSubmit_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == "" || textBox2.Text == "")
            {
                MessageBox.Show("Please provide UserName and Password");
            }
            try
            {
                if (textBox1.Text != "" || textBox2.Text != "")
                {
                    MessageBox.Show("Login Succesfull");
                    this.Hide();
                    Form2 form2 = new Form2();
                    form2.Show();
                }
                else
                {
                    MessageBox.Show("Login Failed!");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
