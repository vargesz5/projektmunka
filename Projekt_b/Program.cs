namespace Projekt_b
{
    internal class Program
    {
        public static List<Data> t = new List<Data>();
        static List<string> teszt = new();
        static bool running = true;
        static string add = "";
        static void Main(string[] args)
        {
            try
            {
                Kiiras();
            }
            catch
            {
                Error();
            }
        }



        static void Kiiras()
        {
            while (running)
            {
                Fajl("adatok.txt");

                Console.WriteLine();
                Console.WriteLine("Bezárás(0)");
                Console.WriteLine("Hozzáadás(1)");
                Console.WriteLine("Keresés(2)");
                Console.WriteLine("Statisztika(3)");
                Console.WriteLine("Weblap(4)");
                Console.WriteLine("Akció(5)");
                Console.WriteLine("Módosítás(6)");
                Console.Write("\nFeladat: ");
                int q;
                string try_q = Console.ReadLine() ?? "";
                while (!int.TryParse(try_q, out q))
                {
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.Write("\nFeladat: ");
                    try_q = Console.ReadLine() ?? "";
                    Console.ForegroundColor = ConsoleColor.Gray;

                }
                switch (q)
                {
                    case 0:
                        running = false;
                        break;
                    case 1:
                        Add();
                        break;
                    case 2:
                        Search();
                        break;
                    case 3:
                        Statisztika.Stat();
                        break;
                    case 4:
                        Html.Write();
                        break;
                    case 5:
                        Akcio.Ar_akcio();
                        break;
                    case 6:
                        Write("modify");
                        break;
                    default:
                        Error();
                        break;
                }
            }
        }


        static void Fajl(string allomany)
        {
            foreach (var sor in File.ReadAllLines(allomany))
            {
                var elem = sor.Split(";");
                if (elem.Length < 2)
                    continue;
                string tipus = elem[0];
                string nev = elem[1];
                string parameter = elem[2];
                int ar = int.Parse(elem[3]);
                t.Add(new Data(tipus, nev, parameter, ar));
            }

        }

        public static void Write(string task)
        {
            if (task == "add")
            {
                List<string> d = new();
                foreach (var x in t)
                {
                    string main = x.Tipus + ";" + x.Nev + ";" + x.Parameter + ";" + x.Ar;
                    d.Add(main);
                }

                if (add != "")
                {
                    d.Add(add);
                }

                File.WriteAllLines("adatok.txt", d);
            }
            else if (task == "akcio")
            {
                List<string> d = new();
                foreach (var x in t)
                {
                    int uj_ar = (int)(x.Ar * (Akcio.a / 100f));
                    string main = x.Tipus + ";" + x.Nev + ";" + x.Parameter + ";" + uj_ar;
                    d.Add(main);
                }

                if (add != "")
                {
                    d.Add(add);
                }

                File.WriteAllLines("adatok.txt", d);
            }

            else if (task == Akcio.valaszt)
            {
                List<string> d = new();
                string main = "";
                int uj_ar;
                foreach (var x in t)
                {
                    if (x.Tipus == Akcio.valaszt)
                    {
                        uj_ar = (int)(x.Ar * (Akcio.a / 100f));
                        main = x.Tipus + ";" + x.Nev + ";" + x.Parameter + ";" + uj_ar;
                    }
                    else
                    {
                        main = x.Tipus + ";" + x.Nev + ";" + x.Parameter + ";" + x.Ar;
                    }
                    d.Add(main);
                }

                if (add != "")
                {
                    d.Add(add);
                }

                File.WriteAllLines("adatok.txt", d);
            }
            else if (task == "modify")
            {
                Console.WriteLine("Módosítás(hanyadik_sor): ");
                int modositando_elem_szam = 0;
                try
                {
                    modositando_elem_szam = Convert.ToInt32(Console.ReadLine());
                }
                catch
                {
                    Error();
                }
                modositando_elem_szam--;
                Modify(modositando_elem_szam);
            }

        }


        static void Add()
        {
            string type;
            string name;
            string property;
            int price;

            Console.Write("Típus: ");
            type = Console.ReadLine() ?? "";
            Console.Write("Név: ");
            name = Console.ReadLine() ?? "";
            Console.Write("Paraméter: ");
            property = Console.ReadLine() ?? "";
            Console.Write("Ár: ");
            string try_price = Console.ReadLine() ?? "";
            while (!int.TryParse(try_price, out price))
            {
                Console.WriteLine("Rossz bemenet!");
                Console.Write("Ár: ");
                try_price = Console.ReadLine() ?? "";
            }

            add = type + ";" + name + ";" + property + ";" + price;

            Write("add");
        }

        static void Search()
        {
            Console.Write("\nKeresés(t(típus)/n(név)/p(paraméter)/a(ár)): ");
            string s = Console.ReadLine() ?? "";

            if (s is "a" or "t" or "n" or "p")
            {
                Console.Write("Keresés: ");
                Kereses.chosen = Console.ReadLine() ?? "".ToLower();
                switch (s)
                {
                    case "p":
                        Kereses.S(2);
                        break;
                    case "t":
                        Kereses.S(3);
                        break;
                    case "n":
                        Kereses.S(4);
                        break;

                }
            }

            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("\nRossz bemenet.\n");
                Console.ForegroundColor = ConsoleColor.Gray;
            }
        }

        static void Error()
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("\n-----HIBA-----");
            Console.ForegroundColor = ConsoleColor.Gray;
            running = false;
        }

        public static void Modify(int index)
        {
            if (index >= 0 && index < t.Count)
            {
                Console.Write("Új típus: ");
                t[index].Tipus = Console.ReadLine() ?? "";
                Console.Write("Új név: ");
                t[index].Nev = Console.ReadLine() ?? "";
                Console.Write("Új paraméter: ");
                t[index].Parameter = Console.ReadLine() ?? "";
                Console.Write("Új ár: ");
                t[index].Ar = Convert.ToInt32(Console.ReadLine());

                List<string> tempLines = new List<string>();
                foreach (var data in t)
                {
                    string line = $"{data.Tipus};{data.Nev};{data.Parameter};{data.Ar}";
                    tempLines.Add(line);
                }

                File.WriteAllLines("adatok.txt", tempLines);
            }
            else
            {
                Console.WriteLine("Rossz bemenet.");
            }
        }

    }
}