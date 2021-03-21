using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SerializationVezba
{
    class Program
    {
        static void Main(string[] args)
        {
            FileStream writestream = new FileStream(@"C:\Users\Nikola\Desktop\students.txt", FileMode.OpenOrCreate);
            BinaryFormatter writeformatter = new BinaryFormatter();
            IList<string> roles = new List<string>() { "admin", "user" };
            Student s = new Student(1, "Mika Mikic", "mika.mikic@gmail.com", true, DateTime.Now, roles);
            writeformatter.Serialize(writestream, s);
            writestream.Close();
            FileStream readstream = new FileStream(@"C:\Users\Nikola\Desktop\students.txt", FileMode.OpenOrCreate);
            BinaryFormatter readformatter = new BinaryFormatter();
            Student deserializedStudent = (Student)readformatter.Deserialize(readstream);
            Console.WriteLine($"ID: {deserializedStudent.ID}  \n  Name: {deserializedStudent.Name}");
            readstream.Close();

            Tutorial tutorial = new Tutorial
            {
                ID = 1,
                Name = "C# tutorial"
            };
            IFormatter formatter = new BinaryFormatter();
            Stream stream = new FileStream(@"C:\Users\Nikola\Desktop\tutorials.txt", FileMode.Create, FileAccess.Write);
            formatter.Serialize(stream, tutorial);
            stream.Close();
            stream = new FileStream(@"C:\Users\Nikola\Desktop\tutorials.txt", FileMode.Open, FileAccess.Read);
            Tutorial deserializedtutorial = (Tutorial)formatter.Deserialize(stream);
            Console.WriteLine($"{deserializedtutorial.ID}, {deserializedtutorial.Name}");
            stream.Close();

            string jsonstring = JsonConvert.SerializeObject(s);
            Console.WriteLine(jsonstring);
            Student s1 = JsonConvert.DeserializeObject<Student>(jsonstring);
            Console.WriteLine(s1.Email);
            File.WriteAllText(@"C:\Users\Nikola\Desktop\Students.json", jsonstring);

            using (StreamWriter streamfile = File.CreateText(@"C:\Users\Nikola\Desktop\OneStudentUsing.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(streamfile, s);
            };
            Student deserializedStudent1 = JsonConvert.DeserializeObject<Student>(File.ReadAllText(@"C:\Users\Nikola\Desktop\OneStudentUsing.json"));

            using (StreamReader readerFromFile = File.OpenText(@"C:\Users\Nikola\Desktop\OneStudentUsing.json"))
            {
                JsonSerializer serilizer = new JsonSerializer();
                Student deserializedStudent2 = (Student)serilizer.Deserialize(readerFromFile, typeof(Student));
            };

            Employee joe = new Employee { Name = "Joe Employee" };
            Employee mike = new Employee { Name = "Mike Manager" };
            joe.Manager = mike;
            mike.Manager = mike;
            string outputjson = JsonConvert.SerializeObject(new[] { joe, mike }, Formatting.Indented);
            Console.WriteLine(outputjson);


            Console.ReadLine();
        }
    }
}
