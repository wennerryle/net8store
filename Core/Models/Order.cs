using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace net8store.Core.Models;

public class Order
{
        [BindNever] //Не отображается
        public int OrderId { get; set; }
        [Display(Name = "Имя")]
        [StringLength(50)]
        [Required(ErrorMessage ="Вы не ввели имя")]
        public required string Name { get; set; }
        [Display(Name = "Фамилия")]
        [StringLength(50)]
        [Required(ErrorMessage = "Вы не ввели фамилию")]
        public required string Surname { get; set; }
        [Display(Name = "Адрес")]
        [StringLength(200)]
        [Required(ErrorMessage = "Вы не ввели адрес")]
        public required string Adress { get; set; }
        [Display(Name = "Номер телефона")]
        [StringLength(11)]
        [DataType(DataType.PhoneNumber)]
        [Required(ErrorMessage = "Вы не ввели номер")]
        public required string Phone { get; set; }
        [Display(Name = "E-mail")]
        [StringLength(50)]
        [DataType(DataType.EmailAddress)]
        [Required(ErrorMessage = "Вы не ввели почту")]
        public required string Email { get; set; }
        [BindNever]
        [ScaffoldColumn(false)]//указывается для системных полей, которые не отображаются
        public DateTime OrderTime { get; set; }
        public required ICollection<OrderDetail> OrderDetail { get; set; }
}
