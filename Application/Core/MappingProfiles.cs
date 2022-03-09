using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity,Activity>();
            CreateMap<Activity, ActivityDto>()
            .ForMember(des => des.HostUsername, opt => opt.MapFrom(s => s.Attendees.FirstOrDefault(x => x.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, Profiles.Profile>()
            .ForMember(des => des.DisplayName, opt => opt.MapFrom(s => s.AppUser.DisplayName))
            .ForMember(des => des.Username, opt => opt.MapFrom(s => s.AppUser.UserName))
            .ForMember(des => des.Bio, opt => opt.MapFrom(s => s.AppUser.Bio));

        }
    }
}