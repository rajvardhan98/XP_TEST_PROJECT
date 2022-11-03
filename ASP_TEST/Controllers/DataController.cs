using ASP_TEST.CustomMethods;
using ASP_TEST.CustomModels;
using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Net.Http;
using System.Web;
//using System.Web.Mvc;
using System.Net;
using Newtonsoft.Json.Linq;
using System.Web.Http;
using System.Web.UI.WebControls;
using ASP_TEST.Models;

namespace ASP_TEST.Controllers
{
    public class DataController : ApiController
    {
        DataMethod dataMethod;
        DataController()
        {
            dataMethod = new DataMethod();
        }

        [HttpPost]
        [Route("api/AddData")]
        public HttpResponseMessage AddData(Data data)
        {
            HttpResponseMessage responseMessage = new HttpResponseMessage();
            Response<Data> response = new Response<Data>();
            try
            {
                response.Status = true;
                response.Data = dataMethod.AddData(data);
                response.Message = "Record added successfully";
            }
            catch(Exception)
            {
                throw;
            }
            responseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return responseMessage;
        }

        [HttpDelete]
        [Route("api/Delete")]
        public HttpResponseMessage Delete(int Id)
        {
            HttpResponseMessage responseMessage = new HttpResponseMessage();
            Response<bool> response = new Response<bool>();
            try
            {
                var result = this.dataMethod.Delete(Id);
                response.Status = true;
                response.Data = dataMethod.Delete(Id);
                response.Message = "Deletion successful";
            }
            catch (Exception)
            {
                throw;
            }
            responseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return responseMessage;
        }

        [HttpPut]
        [Route("api/UpdateName")]
        public HttpResponseMessage UpdataName(Data data)
        {
            HttpResponseMessage httpResponseMessage = new HttpResponseMessage();
            Response<Data> response = new Response<Data>();
            try
            {
                response.Status = true;
                response.Data = dataMethod.UpdateName(data);
                response.Message = "Name updated successfully";
            }
            catch(Exception)
            {
                throw;
            }
            httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return httpResponseMessage;
        }

        [HttpPut]
        [Route("api/UpdateSubject")]
        public HttpResponseMessage UpdataSubject(Data data)
        {
            HttpResponseMessage httpResponseMessage = new HttpResponseMessage();
            Response<Data> response = new Response<Data>();
            try
            {
                response.Status = true;
                response.Data = dataMethod.UpdateSub(data);
                response.Message = "subject updated successfully";
            }
            catch (Exception)
            {
                throw;
            }
            httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return httpResponseMessage;
        }

        [HttpGet]
        [Route("api/GetAllData")]
        public HttpResponseMessage GetAllData()
        {
            HttpResponseMessage httpResponseMessage = new HttpResponseMessage();
            Response<List<Data>> response = new Response<List<Data>>();
            try
            {
                response.Status = true;
                response.Data = dataMethod.GetAllData();
                response.Message = "Displaying all records";
            }
            catch (Exception)
            {
                throw;
            }
            httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return httpResponseMessage;
        }

        [HttpGet]
        [Route("api/GetbyId")]
        public HttpResponseMessage GetById(int id)
        {
            HttpResponseMessage httpResponseMessage = new HttpResponseMessage();
            Response<List<Data>> response = new Response<List<Data>>();
            try
            {
                var result = this.dataMethod.GetbyID(id);
                response.Status = true;
                response.Data = dataMethod.GetbyID(id);
                response.Message = "Displaying the record";
            }
            catch (Exception)
            {
                throw;
            }
            httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK, JObject.FromObject(response));
            return httpResponseMessage;

        }
    }
}