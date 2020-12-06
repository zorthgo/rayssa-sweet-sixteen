using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace RayssaSweet16.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class RsvpController : ControllerBase
    {
        private readonly RsvpCollection _rsvpCollection;

        public RsvpController(RsvpCollection rsvpCollection)
        {
            _rsvpCollection = rsvpCollection;
        }

        [HttpGet]
        public string GetTestMessage()
        {
            return "Done";
        }

        [HttpPost]
        public SetRsvpResponse SetRsvp([FromForm] SetRsvpRequest request)
        {
            // Possible responses statuses
            //      - success
            //      - failure
            //      - warning

            string status;
            string message;

            try
            {
                // Determines whether the request is updating or inserting a new entry.
                if (_rsvpCollection.GetByEmail(request.Email) == null)
                {
                    status = "success";
                    message = "Thank you for RSVPing!";
                }
                else
                {
                    status = "warning";
                    message = "Your RSVP entry has been updated.";
                }

                // Inserts a new entry.
                _rsvpCollection.Add(request);
                _rsvpCollection.Save();

            }
            catch (Exception e)
            {
                // If an error has occurred, we will override the status and the message.
                status = "failure";
                message = e.Message;
            }

            // Returns the response object.
            return new SetRsvpResponse
            {
                Status = status,
                Message = message
            }; ;
        }

        [HttpGet]
        public RsvpCollection GetRsvp()
        {
            return _rsvpCollection;
        }

        [HttpGet]
        public RsvpCollection DeleteRsvpEntry([FromQuery] string emailAddress)
        {
            var rsvp = _rsvpCollection.GetByEmail(emailAddress);

            _rsvpCollection.Remove(rsvp);

            _rsvpCollection.Save();

            return _rsvpCollection;
        }
    }

    public class SetRsvpRequest
    {
        public DateTime TimeStamp { get; set; } = DateTime.Now;
        public string Name { get; set; }
        public string Email { get; set; }
        public int NumberOfGuests { get; set; }
    }

    public class SetRsvpResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
