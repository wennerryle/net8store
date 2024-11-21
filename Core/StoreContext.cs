using System.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace net8store.Core;

public class StoreContext : DbContext
{
  private readonly IConfiguration configuration;

  public StoreContext(DbContextOptions<StoreContext> options, IConfiguration configuration) : base(options)
  {
    this.configuration = configuration;
    Database.EnsureCreated();
  }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    var connectionString = configuration["Database:ConnectionString"];

    Trace.Assert(connectionString != null);

    optionsBuilder.UseSqlite(connectionString);
  }
}
