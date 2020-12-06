using System;
using RayssaSweet16.Controllers;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace RayssaSweet16
{
    public class RsvpCollection : List<SetRsvpRequest>
    {
        public const string FileName = "RsvpCollection.col";


        public void Save()
        {
            var serialized = JsonSerializer.Serialize(this);
            File.WriteAllText(FileName, serialized);
        }

        public SetRsvpRequest GetByEmail(string emailAddress)
            => this.FirstOrDefault(x => x.Email.Equals(emailAddress, StringComparison.InvariantCultureIgnoreCase));
        
        public static RsvpCollection GetRsvpCollection()
        {
            if(!File.Exists(FileName))
                return new RsvpCollection();

            var serializedCollection = File.ReadAllText(FileName);

            return string.IsNullOrWhiteSpace(serializedCollection)
                ? new RsvpCollection()
                : JsonSerializer.Deserialize<RsvpCollection>(serializedCollection);
        }
    }
}
