using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncVezba
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            Thread thread1 = new Thread(ProcessSleep1);
            Thread thread2 = new Thread(ProcessSleep2);
            thread1.Start();
            thread2.Start();
            */
            /*
            Thread oThread = new Thread(MethodJoin);
            oThread.Start();
            oThread.Join();
            Console.WriteLine("Work completed");
            */
            /*
            Stopwatch sw = new Stopwatch();
            sw.Start();
            Thread oThread = new Thread(ProcessSleep);
            oThread.Start();
            oThread.Join();
            sw.Stop();
            TimeSpan ts = sw.Elapsed;
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}", ts.Hours, ts.Minutes, ts.Seconds);
            Console.WriteLine("Total time " + elapsedTime);
            Console.WriteLine("Work completed");
            */
            /*
            try
            {
                Thread objThread = new Thread(ProcessSleep);
                objThread.Start();
                objThread.Join();
                objThread.Abort();
                Console.WriteLine("End of main thread");
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex);
            }
            */
            /*
            ThreadStart myThreadDelegate = new ThreadStart(DoWork);
            Thread myThread = new Thread(myThreadDelegate);
            myThread.Start();
            Thread.Sleep(100);
            Console.WriteLine("Main - aborting my thread");
            myThread.Abort();
            myThread.Join();
            Console.WriteLine("Main Ending");
            */
            /*
            Task task = Task.Run(() =>
            {
                int a = 0;
                for (a = 0; a <= 1000; a++)
                {

                }
                Console.WriteLine("{0} iteration loop ends", a);
            });
            task.Wait();
            */
            /*
            Task t1 = Task.Run(() =>
            {
                PrintInfo();
            });
            t1.Wait();
            Console.WriteLine("Main Thread Completed");
            */
            /*
            Thread.CurrentThread.Name = "Main";
            Task TaskA = new Task(() => Console.WriteLine("Hello from Task A"));
            TaskA.Start();
            TaskA.Wait();
            Console.WriteLine("Hello from thread " + Thread.CurrentThread.Name);
            //TaskA.Wait();
            */
            /*
            Task[] taskArray = new Task[10];
            for (int i = 0; i < taskArray.Length; i++)
            {
                taskArray[i] = Task.Factory.StartNew((Object obj) =>
                {
                    CustomData data = obj as CustomData;
                    if (data == null)
                        return;
                    data.ThreadNumber = Thread.CurrentThread.ManagedThreadId;
                },
                new CustomData { Name = i, CreationTime = DateTime.Now.Ticks });
            }
            Task.WaitAll(taskArray);
            foreach(var task in taskArray)
            {
                var data = task.AsyncState as CustomData;
                if(data != null)
                    Console.WriteLine($"Task #{data.Name} created at {data.CreationTime}, run on thread #{data.ThreadNumber}");
            }
            */
            /*
            Task<int[]> getData = Task.Factory.StartNew(() =>
            {
                Random rnd = new Random();
                int[] values = new int[100];
                for (int i = 0; i <= values.GetUpperBound(0); i++)
                {
                    values[i] = rnd.Next();
                }
                return values;
            });
            Task<Tuple<int, long, double>>  processdata = getData.ContinueWith((x) =>
            {
                int n = x.Result.Length;
                long sum = 0;
                double mean;
                for (int i = 0; i <= x.Result.GetUpperBound(0); i++)
                {
                    sum += x.Result[i];
                }
                mean = sum / (double)n;
                return Tuple.Create(n, sum, mean);
            });
            Task<string> displayData = processdata.ContinueWith((x) =>
           {
               return String.Format($"N={x.Result.Item1:NO}, Total= {x.Result.Item2:N0}, Mean = {x.Result.Item3:N2}");
           });
            Console.WriteLine(displayData.Result);
            */
            /*
            Func<int, int> delegat = LongRaningOperation;
            IAsyncResult async = delegat.BeginInvoke(20, null, null);
            Console.WriteLine("Do something without result");
            if (!async.IsCompleted)
                Console.WriteLine("Still do something .....");
            Console.WriteLine("Do something without result...");
            int result = delegat.EndInvoke(async);
            Console.WriteLine($"Result of 20 = {result}");
            */
            /*
            callMethod();
            Console.WriteLine(DownloadContent().Result);
            */
            //CallCalculate();
            WriteAndReadTextFromFile();

            Console.ReadKey();

        }
        public static async void WriteAndReadTextFromFile()
        {
            string filepath = @"C:\Users\Nikola\Desktop\vezbe-repo\C#_Vezbe\AsyncVezba\obj\Debug\data.txt";
            string text = "Some text";
            await WriteTextToFileAsync(filepath, text);
            Console.WriteLine("Text written");
            Console.WriteLine("Other work 1");
            Console.WriteLine("Other work 2");
            Console.WriteLine(await ReadTextFromFileAsync(filepath));
            Console.WriteLine("After work");

        }
        public static async Task WriteTextToFileAsync(string filepath, string text)
        {
            byte[] encodedText = Encoding.Unicode.GetBytes(text);
            using (FileStream sourceStream = new FileStream(filepath, FileMode.Create, FileAccess.Write, FileShare.None, bufferSize: 4096, useAsync: true))
            {
                await sourceStream.WriteAsync(encodedText, 0, encodedText.Length);
            }
        }
        public static async Task<int> ReadTextFromFileAsync(string filepath)
        {
            int length = 0;
            Console.WriteLine(" File reading is strating.");
            using (StreamReader streamreader = new StreamReader(filepath))
            {
                string s = await streamreader.ReadToEndAsync();
                length = s.Length;
            }
            Console.WriteLine("File Reading is completed");
            return length;
        }
        public static Task<int> Calculate = Task.Factory.StartNew(() =>
        {
            int sum = 0;
            for (int i = 1; i <= 1000000; i++)
            {
                sum += i;
            }
            return sum;
        });
        public static async void CallCalculate()
        {
            var result = await Calculate;
            Console.WriteLine(result);
        }
        public static async Task<string> DownloadContent()
        {
            using (HttpClient client = new HttpClient())
            {
                string result = await client.GetStringAsync("http://25.io/toau/audio/sample.txt");
                return result;
            }
        }
        public static async Task<int> Method1()
        {
            int count = 0;
            await Task.Run(() =>
            {
                for (int i = 0; i < 100; i++)
                {
                    Console.WriteLine("Method 1");
                    count += 1;
                }
            });
            return count;
        }
        public static void Method2()
        {
            for (int i = 0; i < 25; i++)
            {
                Console.WriteLine("Method 2");
            }
        }
        public static void Method3(int count)
        {
            Console.WriteLine("Total count is " + count);
        }
        public static async void callMethod()
        {
            Task<int> task = Method1();
            Method2();
            int count = await task;
            Method3(count);
        }
        private static int LongRaningOperation(int loop)
        {
            int counter;
            for (counter = 0; counter < loop; counter++)
            {
                Console.WriteLine(counter);
            }
            return counter * 3;

        }

        class CustomData
        {
            public long CreationTime { get; set; }
            public int Name { get; set; }
            public int ThreadNumber { get; set; }
        }

        static void ProcessSleep1()
        {
            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine("Work in progress 1 ...!");
                Thread.Sleep(2000);
            }
        }
        static void ProcessSleep2()
        {
            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine("Work in progress 2 ...!");
                Thread.Sleep(1000);
            }
        }
        static void MethodJoin()
        {
            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine("Work in progress");
            }
        }
        static void ProcessSleep()
        {
            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine("Work in progess....");
                Thread.Sleep(4000);
            }
        }
        static void DoWork()
        {
            try
            {
                for (int i = 0; i < 100; i++)
                {
                    Console.WriteLine("Thread working");
                    Thread.Sleep(100);
                }
            }
            catch (ThreadAbortException e)
            {
                Console.WriteLine("Thread - caught ThreadAbortException - resetting");
                Console.WriteLine("Exception message: " + e.Message);
                Thread.ResetAbort();
            }
            Console.WriteLine("Thread - still alive and working");
            Thread.Sleep(1000);
            Console.WriteLine("Thread finshed working");
        }
        static void PrintInfo()
        {
            for (int i = 0; i <= 4; i++)
            {
                Console.WriteLine("i value : {0}", i);
            }
        }
    }
}
