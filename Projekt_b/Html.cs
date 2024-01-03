using System.Diagnostics;

namespace Projekt_b
{
    internal class Html
    {
        public static string start = @"
            <!DOCTYPE html>
            <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>Document</title>
                <link rel='stylesheet' href='style.css'>
            </head>
            <body>
            <div class='container'>
                <div class='flex-container'>

            ";
        public static string end = "        </div>\r\n    </div></body>\r\n</html>";
        public static List<string> adatok = [];


        public static void Write()
        {
            adatok.Add(start);
            List<string> html = [];
            foreach (var x in Program.t)
            {
                string db = "<div class='item'><p>" + x.Tipus + "</p>" + "<p>" + x.Nev + "</p>" + "<p>" + x.Parameter + "</p>" + "<p>" + x.Ar + "</p></div>";
                adatok.Add(db);
            }
            adatok.Add(end);
            File.WriteAllLines("web.html", adatok);


        }

    }
}
