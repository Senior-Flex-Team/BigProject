using aspnet_app.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace aspnet_app
{
    /// <summary>
    /// Класс DbContext - это основной класс в Entity Framework, который предоставляет доступ к базе данных и управляет объектами модели данных в приложении. DbContext позволяет выполнять CRUD (Create, Read, Update, Delete) операции с данными и выполнять запросы к базе данных.
    /// Класс DbContext связывает модель данных с базой данных и обеспечивает механизмы отслеживания изменений, отката и сохранения изменений в базе данных.Он также предоставляет возможность определения отношений между таблицами и выполнения запросов на выборку данных с использованием LINQ.
    /// Класс DbContext также обеспечивает поддержку механизма Code First, который позволяет создавать модель данных на основе классов сущностей, а затем автоматически создавать соответствующие таблицы в базе данных.
    /// Использование класса DbContext позволяет упростить доступ к базе данных и облегчить работу с данными в приложении. Он также предоставляет возможность использования многих расширенных функций Entity Framework, таких как управление состоянием объектов и работа с транзакциями.
    /// </summary>
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            //Database.EnsureCreated();
        }
        /// <summary>
        /// DbSet - это класс в Entity Framework, который представляет коллекцию сущностей для определенного типа
        /// в контексте базы данных. DbSet предоставляет набор методов для выполнения операций CRUD 
        /// (Create, Read, Update, Delete) с сущностями, связанными с конкретной таблицей в базе данных.
        /// </summary>
        public DbSet<User> User { get; set; }
        public DbSet<Card> Card { get; set; }
        public DbSet<Author> Author { get; set; }
        public DbSet<Category> Category { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Связь карточка -> категория 1к1 (через анотации не получается, при попытке изменить бд, бьет ошибку)
            modelBuilder.Entity<Card>()
                .HasIndex(c => c.CategoryId)
                .IsUnique(false);

            modelBuilder.Entity<Author>().HasData(new Author
            {
                Id = 1,
                Name = "John Doe",
                Image = "https://miro.medium.com/v2/resize:fill:48:48/1*xzr2IEDPCx-UWEd3EAQDfg.jpeg"
            });

            modelBuilder.Entity<Category>().HasData(new Category
            {
                Id = 1,
                Name = "Technology"
            });

            modelBuilder.Entity<Card>().HasData(new
            {
                Id = 1,
                AuthorId = 1,
                CategoryId = 1,
                Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",
                CreatedAt = DateTime.SpecifyKind(new DateTime(2023, 01, 8), DateTimeKind.Utc),
                Image = "https://miro.medium.com/v2/resize:fill:224:224/1*8UwcxNMjdWjipC_XZu8qYg.png",
                Tags = "Mac",
                TimeToRead = TimeSpan.FromMinutes(6),
                Title = "Bill Gates: People Don't Realize What's Coming"
            },
            new
            {
                Id = 2,
                AuthorId = 1,
                CategoryId = 1,
                Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",
                CreatedAt = DateTime.SpecifyKind(new DateTime(2023, 01, 9), DateTimeKind.Utc),
                Image = "https://miro.medium.com/v2/resize:fill:224:224/0*51beacbmyp82xuxN",
                Tags = "Programming",
                TimeToRead = TimeSpan.FromMinutes(13),
                Title = "Node.js Developer Roadmap 2023"
            });
        }
    }
}
