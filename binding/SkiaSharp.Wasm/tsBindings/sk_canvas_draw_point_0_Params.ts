/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_canvas_draw_point_0_Params
	{
		/* Pack=4 */
		t : number;
		x : number;
		y : number;
		paint : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_canvas_draw_point_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_canvas_draw_point_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.x = Number(memoryContext.getValue(pData + 4, "float"));
			}
			
			{
				ret.y = Number(memoryContext.getValue(pData + 8, "float"));
			}
			
			{
				ret.paint = Number(memoryContext.getValue(pData + 12, "*"));
			}
			return ret;
		}
	}
}
