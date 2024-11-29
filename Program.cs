using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using net8store.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddDbContext<StoreContext>(options => {
    options.UseSqlite();
});

builder.Services.AddMvcCore();

builder.Services.AddControllers()
    .AddNewtonsoftJson();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProductStoreAPI", Version = "v1" });
});

var app = builder.Build();

var isDevelopment = app.Environment.IsDevelopment();

Console.WriteLine($"IsDevelopment: {isDevelopment}");

// Configure the HTTP request pipeline.
if (!isDevelopment) {
    app.UseExceptionHandler("/Error");
} else {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseRouting();

app.MapControllers();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
