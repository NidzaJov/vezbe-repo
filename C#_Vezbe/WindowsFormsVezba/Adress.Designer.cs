namespace WindowsFormsVezba
{
    partial class Adress
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.textboxStreetAdress = new System.Windows.Forms.TextBox();
            this.textBoxCity = new System.Windows.Forms.TextBox();
            this.textBoxPostCode = new System.Windows.Forms.TextBox();
            this.comboBoxCountry = new System.Windows.Forms.ComboBox();
            this.SuspendLayout();
            // 
            // textboxStreetAdress
            // 
            this.textboxStreetAdress.Location = new System.Drawing.Point(115, 61);
            this.textboxStreetAdress.Name = "textboxStreetAdress";
            this.textboxStreetAdress.Size = new System.Drawing.Size(174, 22);
            this.textboxStreetAdress.TabIndex = 0;
            this.textboxStreetAdress.TextChanged += new System.EventHandler(this.textboxStreetAdress_TextChanged);
            // 
            // textBoxCity
            // 
            this.textBoxCity.Location = new System.Drawing.Point(115, 124);
            this.textBoxCity.Name = "textBoxCity";
            this.textBoxCity.Size = new System.Drawing.Size(174, 22);
            this.textBoxCity.TabIndex = 1;
            this.textBoxCity.TextChanged += new System.EventHandler(this.textBoxCity_TextChanged);
            // 
            // textBoxPostCode
            // 
            this.textBoxPostCode.Location = new System.Drawing.Point(115, 179);
            this.textBoxPostCode.Name = "textBoxPostCode";
            this.textBoxPostCode.Size = new System.Drawing.Size(174, 22);
            this.textBoxPostCode.TabIndex = 2;
            this.textBoxPostCode.TextChanged += new System.EventHandler(this.textBoxPostCode_TextChanged);
            // 
            // comboBoxCountry
            // 
            this.comboBoxCountry.FormattingEnabled = true;
            this.comboBoxCountry.Location = new System.Drawing.Point(115, 232);
            this.comboBoxCountry.Name = "comboBoxCountry";
            this.comboBoxCountry.Size = new System.Drawing.Size(174, 24);
            this.comboBoxCountry.TabIndex = 3;
            this.comboBoxCountry.SelectedIndexChanged += new System.EventHandler(this.comboBoxCountry_SelectedIndexChanged);
            // 
            // Adress
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.comboBoxCountry);
            this.Controls.Add(this.textBoxPostCode);
            this.Controls.Add(this.textBoxCity);
            this.Controls.Add(this.textboxStreetAdress);
            this.Name = "Adress";
            this.Size = new System.Drawing.Size(443, 346);
            this.Load += new System.EventHandler(this.Adress_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textboxStreetAdress;
        private System.Windows.Forms.TextBox textBoxCity;
        private System.Windows.Forms.TextBox textBoxPostCode;
        private System.Windows.Forms.ComboBox comboBoxCountry;
    }
}
