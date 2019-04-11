/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_bitmap_try_alloc_pixels_0_Params
	{
		/* Pack=4 */
		cbitmap : number;
		requestedInfo : SkiaSharp.SKImageInfoNative;
		rowBytes : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_bitmap_try_alloc_pixels_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_bitmap_try_alloc_pixels_0_Params();
			
			{
				ret.cbitmap = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.requestedInfo = SkiaSharp.SKImageInfoNative.unmarshal(pData + 4);
			}
			
			{
				ret.rowBytes = Number(memoryContext.getValue(pData + 24, "*"));
			}
			return ret;
		}
	}
}
