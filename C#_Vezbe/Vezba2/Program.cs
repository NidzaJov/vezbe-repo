using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Vezba2.Rectangle;
using static Vezba2.AppDelegates;

namespace Vezba2
{
    public class Rectangle
    {
        public delegate void delRectangle(double height, double width);
        public void area(double height, double width)
        {
            Console.WriteLine($"Area is : {height * width}");
        }
        public void perimeter(double height, double width)
        {
            Console.WriteLine($"Perimeter is : {2 * (height + width)}");
        }
        public void DelegateToMethodAsParameter(delRectangle del)
        {
            del.Invoke(5, 5);
        }
    }
    public class AppDelegates
    {
        public delegate void addNumbers(double a, double b);
        public delegate void substractNumbers(int a, int b);
        public static void sum(double a, double b)
        {
            Console.WriteLine($"Sum of this numbers is { a + b }");
        }
        public static void substract(int a, int b)
        {
            Console.WriteLine($"Substruction of these numbers is { a - b }");
        }
    }
    class Program
    {
        public delegate T add<T>(T param1, T param2);
        public delegate void Notify();
        public static int Sum(int value1, int value2)
        {
            return value1 + value2;
        }
        public static string Concat(string str1, string str2)
        {
            return str1 + str2;
        }
        class Publisher
        {
            public static event Notify EventHappend;
            
            public void StartPublishing()
            {
                Console.WriteLine("Started publishing");
                OnEvent();
            }
            protected virtual void OnEvent()
            {
                EventHappend.Invoke();
            }
        }
        class MultiDataProcessPublisher
        {
            public static event EventHandler<ProcessEventArgs> MultiDataProcessCompleted;

            public void StartProcess()
            {
                var data = new ProcessEventArgs();
                try
                {
                    Console.WriteLine("Process started!");
                    data.isSuccesfull = true;
                    data.CompletionTime = DateTime.Now;
                    OnProcessCompleted(data);
                }
                catch (Exception ex)
                {
                    data.isSuccesfull = true;
                    data.CompletionTime = DateTime.Now;
                    OnProcessCompleted(data);
                }
            }
            protected virtual void OnProcessCompleted(ProcessEventArgs e)
            {
                MultiDataProcessCompleted?.Invoke(this, e);
            }
        }
        class Subscriber
        {
            public static void Registering()
            {
                Publisher.EventHappend += PrintEvent;
                MultiDataProcessPublisher.MultiDataProcessCompleted += PrintMultiDataProces;
            }
            public static void PrintEvent()
            {
                Console.WriteLine("Event Happend");
            }
            public static void PrintMultiDataProces(object sender, ProcessEventArgs e)
            {
                Console.WriteLine("Process " + (e.isSuccesfull ? "completed sucessfully" : "failed") + $" CompletionTime: {e.CompletionTime.ToLongDateString()}");
            }
        }
        class ProcessEventArgs : EventArgs
        {
            public bool isSuccesfull { get; set; }
            public DateTime CompletionTime { get; set; }
        }
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            delRectangle delrec = new delRectangle(r.area);
            delrec += r.perimeter;
            delrec.Invoke(5, 10);
            r.DelegateToMethodAsParameter(delrec);
            delrec = (double x, double y) => Console.WriteLine(x / y);
            r.DelegateToMethodAsParameter(delrec);

            addNumbers addingDelegate = new addNumbers(sum);
            substractNumbers substractingDelegate = new substractNumbers(substract);
            addingDelegate += r.perimeter;
            addingDelegate -= sum;
            substractingDelegate(10, 4);
            addingDelegate(12, 13);

            add<int> suma = Sum;
            add<string> con = Concat;
            Console.WriteLine(con("This is", " Sparta!"));

            Subscriber.Registering();
            Publisher p = new Publisher();
            p.StartPublishing();
            MultiDataProcessPublisher mp = new MultiDataProcessPublisher();
            mp.StartProcess();

            Console.ReadKey();
        }
    }
}
