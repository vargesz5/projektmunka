using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt_b
{
    internal class Data(string tipus, string nev, string parameter, int ar)
    {
        public string Tipus { get; set; } = tipus;
        public string Nev { get; set; } = nev;
        public string Parameter { get; set; } = parameter;
        public int Ar { get; set; } = ar;

        public override string ToString()
        {
            return Tipus + " " + Nev + " " + Parameter + " " + Ar;
        }
    }
}
