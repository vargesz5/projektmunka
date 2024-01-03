namespace Projekt_b
{
    internal class Akcio
    {
        public static int a;
        public static string valaszt = "";
        public static void Ar_akcio()
        {
            Console.Write("Akció(%):");
            a = Convert.ToInt32(Console.ReadLine());

            Console.Write("Árcsökkentés(Mind(mind)/Kategória(processzor/alaplap/ram/kartya)): ");
            valaszt = Console.ReadLine() ?? "";
            while (valaszt != "mind" && valaszt != "processzor")
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("\nRossz bemenet!\n");
                Console.ForegroundColor = ConsoleColor.Gray;
                Console.Write("Árcsökkentés(Mind(mind)/Kategória(processzor/alaplap/ram/kartya/hddssd/eger/billentyuzet)): ");
                valaszt = Console.ReadLine() ?? "";
            }

            foreach (var x in Program.t)
            {
                if (x.Nev == valaszt)
                {
                    Console.WriteLine(x.Nev);
                    Program.Write(valaszt);
                }
            }

            switch (valaszt)
            {
                case "mind":
                    Program.Write("akcio");
                    break;

                case "processzor":
                    Program.Write("processzor");
                    break;
                case "alaplap":
                    Program.Write("alaplap");
                    break;
                case "ram":
                    Program.Write("ram");
                    break;
                case "kartya":
                    Program.Write("kartya");
                    break;
                case "hddssd":
                    Program.Write("hddssd");
                    break;
                case "eger":
                    Program.Write("eger");
                    break;
                case "billentyuzet":
                    Program.Write("billentyuzet");
                    break;
            }

        }
    }
}
