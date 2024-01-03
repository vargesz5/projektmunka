using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt_b
{
    internal class Statisztika
    {
        public static void Stat()
        {
            Console.WriteLine("\nStatisztika:");

            int intel_db = 0;
            int amd_db = 0;

            int alaplap_db = 0;
            int processzor_db = 0;
            int ram_db = 0;
            int kartya_db = 0;
            int hddssd_db = 0;
            int eger_db = 0;
            int billentyuzet_db = 0;
            int ar100000Felett = 0;

            foreach (var x in Program.t)
            {
                if (x.Nev.ToLower().Contains("intel") && x.Tipus == "processzor")
                    intel_db++;
                else if (x.Nev.ToLower().Contains("amd") && x.Tipus == "processzor")
                    amd_db++;

                switch (x.Tipus)
                {
                    case "alaplap":
                        alaplap_db++;
                        break;
                    case "processzor":
                        processzor_db++;
                        break;
                    case "ram":
                        ram_db++;
                        break;
                    case "kartya":
                        kartya_db++;
                        break;
                    case "hddssd":
                        hddssd_db++;
                        break;
                    case "egér":
                        eger_db++;
                        break;
                    case "Billentyűzet":
                        billentyuzet_db++;
                        break;
                }

                if (x.Ar > 100000)
                {
                    ar100000Felett++;
                }
            }

            Console.WriteLine("Intel processzorok száma: " + intel_db + " db.");
            Console.WriteLine("AMD processzorok száma: " + amd_db + " db.");

            Console.WriteLine("Alaplapok száma: " + alaplap_db + " db.");
            Console.WriteLine("Processzorok száma: " + processzor_db + " db.");
            Console.WriteLine("RAM-ok száma: " + ram_db + " db.");
            Console.WriteLine("Kártyák száma: " + kartya_db + " db.");
            Console.WriteLine("HDD/SSD-k száma: " + hddssd_db + " db.");
            Console.WriteLine("Egerek száma: " + eger_db + " db.");
            Console.WriteLine("Billentyűzetek száma: " + billentyuzet_db + " db.");

            Console.WriteLine("100000 feletti: " + ar100000Felett + " db.");

        }
    }
}
