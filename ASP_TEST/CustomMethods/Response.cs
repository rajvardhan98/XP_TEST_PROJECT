using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASP_TEST.CustomMethods
{
    public class Response <X>
    {
        public bool Status { get; set; }
        public string Message { get; set; }
        public X Data { get; set; }
    }
}