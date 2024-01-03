namespace Projekt_b
{
    internal class Kereses
    {
        public static List<string> list = [];
        public static string chosen = "";
        public static void S(int elem)
        {
            list = new List<string>();
            switch (elem)
            {
                case 2: //paraméter
                    foreach (var x in Program.t)
                    {
                        if (x.Parameter.ToLower().Contains(chosen))
                        {
                            list.Add(x.ToString());
                        }
                    }
                    break;
                case 3: //típus
                    foreach (var x in Program.t)
                    {
                        if (x.Tipus.ToLower().Contains(chosen))
                        {
                            list.Add(x.ToString());
                        }
                    }
                    break;
                case 4: //név
                    foreach (var x in Program.t)
                    {
                        if (x.Nev.ToLower().Contains(chosen))
                        {
                            list.Add(x.ToString());
                        }
                    }
                    break;
            }
            foreach (var x in list)
            {
                Console.WriteLine(x);
            }
        }
    }
}
