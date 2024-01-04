namespace Projekt_b
{
    internal class Kereses
    {
        public static List<string> list = [];
        public static string chosen = "";
        public static void S(int elem)
        {
            list = [];
            switch (elem)
            {
                case 2: //paraméter
                    foreach (var x in Program.t)
                    {
                        if (x.Parameter.Contains(chosen, StringComparison.CurrentCultureIgnoreCase) && !list.Contains(x.ToString()))
                        {
                            list.Add(x.ToString());
                        }
                    }
                    break;
                case 3: //típus
                    foreach (var x in Program.t)
                    {
                        if (x.Tipus.Contains(chosen, StringComparison.CurrentCultureIgnoreCase) && !list.Contains(x.ToString()))
                        {
                            list.Add(x.ToString());
                        }
                    }
                    break;
                case 4: //név
                    foreach (var x in Program.t)
                    {
                        if (x.Nev.Contains(chosen, StringComparison.CurrentCultureIgnoreCase) && !list.Contains(x.ToString()))
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
