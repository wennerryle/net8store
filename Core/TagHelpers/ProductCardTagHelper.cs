using Microsoft.AspNetCore.Razor.TagHelpers;

namespace net8store.Core.TagHelpers;

// see: https://stackoverflow.com/questions/64783152/vs2019-typescript-intellisense-for-custom-htmlelement-in-cshtml-view

[HtmlTargetElement("product-card", Attributes = "description, cost, imageurl, id")]
public class ProductCardTagHelper : TagHelper
{

  [HtmlAttributeName("imageurl")]
  public required int ImageUrl { get; set; }

  [HtmlAttributeName("id")]
  public required int Id { get; set; }

  [HtmlAttributeName("description")]
  public required string Description { get; set; }
  
  [HtmlAttributeName("cost")]
  public required double Cost { get; set; }
}
