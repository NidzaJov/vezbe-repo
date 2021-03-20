namespace WindowsFormsVezba
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.listVievStudents = new System.Windows.Forms.ListView();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.adresscontrol1 = new WindowsFormsVezba.Adress();
            this.SuspendLayout();
            // 
            // listVievStudents
            // 
            this.listVievStudents.FullRowSelect = true;
            this.listVievStudents.GridLines = true;
            this.listVievStudents.HideSelection = false;
            this.listVievStudents.Location = new System.Drawing.Point(12, 12);
            this.listVievStudents.Name = "listVievStudents";
            this.listVievStudents.Size = new System.Drawing.Size(370, 249);
            this.listVievStudents.Sorting = System.Windows.Forms.SortOrder.Descending;
            this.listVievStudents.TabIndex = 0;
            this.listVievStudents.UseCompatibleStateImageBehavior = false;
            this.listVievStudents.View = System.Windows.Forms.View.Details;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(660, 36);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(96, 32);
            this.button1.TabIndex = 1;
            this.button1.Text = "Log out";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(660, 367);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(96, 28);
            this.button2.TabIndex = 2;
            this.button2.Text = "Submit";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // adresscontrol1
            // 
            this.adresscontrol1.City = null;
            this.adresscontrol1.CountryId = 1;
            this.adresscontrol1.Location = new System.Drawing.Point(80, 267);
            this.adresscontrol1.Name = "adresscontrol1";
            this.adresscontrol1.PostCode = 0;
            this.adresscontrol1.Size = new System.Drawing.Size(397, 263);
            this.adresscontrol1.StreetAdress = null;
            this.adresscontrol1.TabIndex = 3;
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(852, 558);
            this.Controls.Add(this.adresscontrol1);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.listVievStudents);
            this.Name = "Form2";
            this.Text = "Form2";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form2_FormClosing);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListView listVievStudents;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private Adress adresscontrol1;
    }
}