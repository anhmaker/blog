using Microsoft.Extensions.DependencyInjection;
using Services;
using System;

namespace Blog.Infrastructure
{
    public static class StartupHelper
    {
        public static IServiceCollection AddClass1(this IServiceCollection serviceCollection)
        {
            return serviceCollection.AddScoped<IClass1, Class1>();
        }
    }
}
