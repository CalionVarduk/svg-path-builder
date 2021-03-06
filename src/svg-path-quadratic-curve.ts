import { SvgPathNode } from './svg-path-node';
import { SvgPathNodeType } from './svg-path-node-type';
import { Vector, Vector2 } from './primitives/vector';
import { Angle } from './primitives/angle';

/** Specifies an svg path quadratic curve node. */
export class SvgPathQuadraticCurve extends SvgPathNode
{
    public get type(): SvgPathNodeType
    {
        return SvgPathNodeType.QuadraticCurve;
    }
    public get angleInDegrees(): number
    {
        return Vector.getAngle({ x: this.x - this.bezierX, y: this.y - this.bezierY });
    }

    /** Specifies curve node's bezier point's x coordinate. */
    public set bezierX(value: number)
    {
        this._bezierX = value || 0;
    }
    public get bezierX(): number
    {
        return this._bezierX;
    }
    /** Specifies curve node's bezier point's y coordinate. */
    public set bezierY(value: number)
    {
        this._bezierY = value || 0;
    }
    public get bezierY(): number
    {
        return this._bezierY;
    }
    /** Specifies curve node's bezier point's coordinates. */
    public set bezierPoint(value: Vector2)
    {
        if (value)
        {
            this.bezierX = value.x;
            this.bezierY = value.y;
        }
        else
        {
            this.bezierX = 0;
            this.bezierY = 0;
        }
    }
    public get bezierPoint(): Vector2
    {
        return { x: this.bezierX, y: this.bezierY };
    }

    public set x(value: number)
    {
        this._x = value || 0;
    }
    public get x(): number
    {
        return this._x;
    }
    public set y(value: number)
    {
        this._y = value || 0;
    }
    public get y(): number
    {
        return this._y;
    }

    private _bezierX: number;
    private _bezierY: number;
    private _x: number;
    private _y: number;

    /**
     * Creates new svg path quadratic curve node.
     * @param x x coordinate
     * @param y y coordinate
     * @param bezierX bezier point's x coordinate
     * @param bezierY bezier point's y coordinate
     * @param prev node's predecessor
     * */
    public constructor(x: number, y: number, bezierX: number, bezierY: number, prev: SvgPathNode)
    {
        super(prev);
        if (!prev)
            throw new Error('svg path quadratic curve node lacks predecessor node');

        this._x = x || 0;
        this._y = y || 0;
        this._bezierX = bezierX || 0;
        this._bezierY = bezierY || 0;
    }

    /**
     * Creates a copy of this node.
     * @param prev predecessor node
     * @returns a copy of this node
     * */
    public copy(prev: SvgPathNode): SvgPathQuadraticCurve
    {
        return new SvgPathQuadraticCurve(this.x, this.y, this.bezierX, this.bezierY, prev);
    }
    /**
     * Scales this node according to the provided origin and scale value.
     * @param originX x coordinate of the scaling origin point
     * @param originY y coordinate of the scaling origin point
     * @param value scale value
     * */
    public scale(originX: number, originY: number, value: number): void
    {
        this.x = (this.x - originX) * value + originX;
        this.y = (this.y - originY) * value + originY;
        this.bezierX = (this.bezierX - originX) * value + originX;
        this.bezierY = (this.bezierY - originY) * value + originY;
    }
    /**
     * Translates this node according to the provided offset.
     * @param dx x coordinate offset
     * @param dy y coordinate offset
     * */
    public translate(dx: number, dy: number): void
    {
        this.x += dx;
        this.y += dy;
        this.bezierX += dx;
        this.bezierY += dy;
    }
    /**
     * Rotates this node clockwise according to the provided origin and angle.
     * @param originX x coordinate of the rotation origin point
     * @param originY y coordinate of the rotation origin point
     * @param angle angle to rotate by
     * */
    public rotate(originX: number, originY: number, angle: Angle): void
    {
        let x = this.x - originX;
        let y = this.y - originY;
        this.x = (x * angle.cos + y * angle.sin) + originX;
        this.y = (-x * angle.sin + y * angle.cos) + originY;
        x = this.bezierX - originX;
        y = this.bezierY - originY;
        this.bezierX = (x * angle.cos + y * angle.sin) + originX;
        this.bezierY = (-x * angle.sin + y * angle.cos) + originY;
    }
    /**
     * Creates an svg command from this node.
     * @param precision number of digits after the decimal point
     * @returns created svg command
     * */
    public createSvgCommand(precision: number): string
    {
        const bx = this.bezierX.toFixed(precision);
        const by = this.bezierY.toFixed(precision);
        const x = this.x.toFixed(precision);
        const y = this.y.toFixed(precision);
        return `Q ${bx} ${by} ${x} ${y}`;
    }
}
