using ASP_TEST.CustomModels;
using ASP_TEST.Models;
using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Web;

namespace ASP_TEST.CustomMethods
{
    public class DataMethod
    {
        DataClassDataContext dataContext;
        public DataMethod()
        {
            dataContext = new DataClassDataContext();
        }

        public Data AddData(Data data)
        {
            try
            {
                dataContext.addData(data.name, data.subject);
            }
            catch(Exception)
            {
                throw;
            }
            return data;
        }

        public bool Delete(int id)
        {
            try
            {
                dataContext.deleteData(id);
            }
            catch(Exception)
            {
                throw;
            }
            return true;
        }

        public Data UpdateName(Data data)
        {
            try
            {
                dataContext.updateName(data.id, data.name);
            }
            catch(Exception)
            {
                throw;
            }
            return data;
        }

        public Data UpdateSub(Data data)
        {
            try
            {
                dataContext.updateSubject(data.id, data.subject);
            }
            catch(Exception)
            {
                throw;
            }
            return data;
        }

        public List<Data> GetAllData()
        {
            List<Data> list = new List<Data>();
            try
            {
                var l = dataContext.getallData().ToList();
                if (l.Count() > 0)
                {
                    list = l.AsEnumerable().Select(x => new Data
                    {
                        id = x.id,
                        name = x.name,
                        subject = x.subject,
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public List<Data> GetbyID(int id)
        {
            List<Data> list = new List<Data>();
            try
            {
                var l = dataContext.getbyID(id).ToList();
                if (l.Count() > 0)
                {
                    list = l.AsEnumerable().Select(x => new Data
                    {
                        id = x.id,
                        name = x.name,
                        subject = x.subject,
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }
    }
}