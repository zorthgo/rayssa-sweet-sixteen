using System;
using Microsoft.AspNetCore.Mvc;

namespace RayssaSweet16.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class RsvpController : ControllerBase
    {
        [HttpGet]
        public string GetTestMessage()
        {
            return "Done";
        }

        [HttpPost]
        public string SetRsvp([FromForm] SetRsvpRequest request)
        {
            Console.WriteLine(request);

            return $"All went well [{request.Name}, {request.Email}, {request.NumberOfGuests}]";
        }
    }

    public class SetRsvpRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int NumberOfGuests { get; set; }
    }
}
