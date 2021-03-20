using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vezba1
{
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int? GroupID { get; set; }

        public Student()
        {

        }

        public Student(int iD, string name, int age, int? groupID)
        {
            ID = iD;
            Name = name;
            Age = age;
            GroupID = groupID;
        }
    }
    public class Group
    {
        public int GroupID { get; set; }
        public string GroupName { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            IList<Student> studentList = new List<Student>()
            {
                new Student(1, "Darko", 13, 1),
                new Student(1, "Milos", 13, 1),
                new Student(1, "Marko", 21, 1),
                new Student(1, "Zarko", 18, 2),
                new Student(1, "Jovan", 18, 2),
                new Student(1, "Janko", 20, 2),
                new Student(1, "Branko", 20, null)
            };
            IList<Group> groupList = new List<Group>()
            {
                new Group{GroupID = 1, GroupName="JavaScript Grupa" },
                new Group{GroupID = 2, GroupName ="C# Grupa"},
                new Group{GroupID = 3, GroupName = "Full Stack Grupa"}
            };

            var groupedResult = studentList.GroupBy(s => s.Age);
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine($"Age Group: {ageGroup.Key}");
                foreach (Student s in ageGroup)
                    Console.WriteLine($"Student name: {s.Name}");
            }
            Console.WriteLine("---------------------------");
            string commaSeparatedStudentNames = studentList.Aggregate<Student, string>("Student Names: ", (str, s) => str += s.Name + ",");
            Console.WriteLine(commaSeparatedStudentNames);
            Student std1 = new Student(7, "Vlada", 25, 3);
            Student std2 = new Student(7, "Vlada", 25, 3);
            Console.WriteLine(std1.Equals(std2));
            IList<Student> stList1 = new List<Student>() { std1 };
            IList<Student> stList2 = new List<Student>() { std2 };
            Console.WriteLine(stList1.SequenceEqual(stList2, new StudentComparer()));
            /*string[] allLines = new string[3];
            allLines = new string[] { "Fle i/o example", "SEDC i/o class", "Third line" };
            File.WriteAllLines("firstfile.txt", allLines);*/
            
            //Console.WriteLine(File.ReadAllText(@"C:\Users\Nikola\Desktop\Git komande.txt"));
            //File.Copy(@"C:\Users\Nikola\Desktop\Git komande.txt", "KopijaGitKomandi.txt");
            /*
            using(StreamWriter sw = File.AppendText("firstfile.txt"))
            {
                sw.WriteLine("New text");
                sw.Close();
            }
            string[] readLines = File.ReadAllLines("firstfile.txt");
            foreach (string line in readLines)
                Console.WriteLine(line);
            */
            using(StreamReader sr = File.OpenText("firstfile.txt"))
            {
                string s = "";
                while((s = sr.ReadLine()) != null)
                    Console.WriteLine(s);
            }

            int totalbyte = 0;
            byte[] data;
            FileStream fs = File.Open(@"C:\Users\Nikola\Pictures\Provera7.PNG", FileMode.Open);
            int size = (int)fs.Length;
            data = new byte[size];
            while (size > 0)
            {
                int read = fs.Read(data, totalbyte, size);
                size -= read;
                totalbyte += read;
            }
            FileStream stream = File.Create("KopijaProvere7.png");
            stream.Write(data, 0, data.Length);
            stream.Close();

            Console.ReadLine();
        }

        class StudentComparer : IEqualityComparer<Student>
        {
            public bool Equals(Student x, Student y)
            {
                return x.ID == y.ID && x.Name.ToLower() == y.Name.ToLower()?  true : false;
            }

            public int GetHashCode(Student obj)
            {
                return obj.GetHashCode();
            }
        }
    }
}
