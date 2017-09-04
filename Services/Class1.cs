using System;

namespace Services
{
    public class Class1 : IClass1
    {
        public string GetName()
        {
            return "w";
        }
    }

    public interface IClass1
    {
        string GetName();
    }
}
