/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_paint_measure_text_0_Return
	{
		/* Pack=4 */
		bounds : SkiaSharp.SKRect;
		public constructor()
		{
			this.bounds = new SkiaSharp.SKRect();
		}
		public marshalNew(memoryContext: any = null) : number
		{
			memoryContext = memoryContext ? memoryContext : Module;
			var pTarget = memoryContext._malloc(16);
			this.marshal(pTarget, memoryContext);
			return pTarget;
		}
		public marshal(pData:number, memoryContext: any = null)
		{
			memoryContext = memoryContext ? memoryContext : Module;
			this.bounds.marshal(pData + 0);
		}
	}
}
