/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_rrect_set_rect_xy_0_Params
	{
		/* Pack=4 */
		rrect : number;
		rect : SkiaSharp.SKRect;
		xRad : number;
		yRad : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_rrect_set_rect_xy_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_rrect_set_rect_xy_0_Params();
			
			{
				ret.rrect = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.rect = SkiaSharp.SKRect.unmarshal(pData + 4);
			}
			
			{
				ret.xRad = Number(memoryContext.getValue(pData + 20, "float"));
			}
			
			{
				ret.yRad = Number(memoryContext.getValue(pData + 24, "float"));
			}
			return ret;
		}
	}
}
