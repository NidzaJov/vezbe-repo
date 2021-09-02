using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DopunskaEventsVezba
{
    class Program
    {
        static void Main(string[] args)
        {
            Publisher radioStation1 = new Publisher();
            Subscriber listener1 = new Subscriber(radioStation1);
            Subscriber listener2 = new Subscriber(radioStation1);
            Publisher radioStation2 = new Publisher();
            //listener1.RegisterToEvent(radioStation1);
            listener2.UnRegisterFromEvent(radioStation1);
            listener2.RegisterToEvent(radioStation2);
            radioStation1.RaiseEvent();
            Thread.Sleep(5000);
            radioStation2.RaiseEvent();
            Console.ReadKey();
        }
    }

    class Publisher
    {
        public event EventHandler<DataAboutEvent> EventHappened;
        public void RaiseEvent()
        {
            if (EventHappened != null)
                EventHappened(this, new DataAboutEvent());
        }
    }
    class Subscriber
    {
        //registering on construction
        public Subscriber(Publisher p)
        {
            p.EventHappened += HandleEvent;
        }

        private void HandleEvent(object sender, DataAboutEvent e)
        {
            Console.WriteLine(e.TimeOfEvent.ToString());
        }

        public void RegisterToEvent(Publisher p)
        {
            p.EventHappened += HandleEvent;
        }
        public void UnRegisterFromEvent(Publisher p)
        {
            p.EventHappened -= HandleEvent;
        }
    }
    class DataAboutEvent : EventArgs
    {
        public DateTime TimeOfEvent { get; set; }

        public DataAboutEvent()
        {
            TimeOfEvent = DateTime.Now;
        }
    }
}
