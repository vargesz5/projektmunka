using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt_b
{
    internal class Data
    {
        public string Tipus { get; set; }
        public string Nev { get; set; }
        public string Parameter { get; set; }
        public int  Ar { get; set; }


        public Data(string tipus, string nev, string parameter, int ar)
        {
            Tipus = tipus;
            Nev = nev;
            Parameter = parameter;
            Ar = ar;
        }
        public override string ToString()
        {
            return Tipus + " " + Nev + " " + Parameter + " " + Ar;
        }
    }
}
