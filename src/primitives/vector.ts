import { Angle } from './angle';
import { DeepReadonly } from 'frl-ts-utils/lib/types/deep-readonly';

/** 2D vector literal type alias. */
export type Vector2 =
{
    /** X coordinate. */
    x: number;
    /** Y coordinate. */
    y: number;
};

/** Contains helper functions that allow to manipulate vector literals. */
export namespace Vector
{
    /**
     * Calculates squared magnitude of vector `v`.
     * @param v target vector literal
     * @returns squared magnitude of `v`
     * */
    export function magnitudeSq(v: DeepReadonly<Vector2>): number
    {
        return v.x * v.x + v.y * v.y;
    }
    /**
     * Calculates magnitude of vector `v`.
     * @param v target vector literal
     * @returns magnitude of `v`
     * */
    export function magnitude(v: DeepReadonly<Vector2>): number
    {
        return Math.sqrt(magnitudeSq(v));
    }
    /**
     * Calculates angle in degrees of vector `v`.
     * @param v target vector literal
     * @returns angle of `v`
     * */
    export function getAngle(v: DeepReadonly<Vector2>): number
    {
        return Angle.toDegrees(Math.atan2(v.y, v.x));
    }
    /**
     * Sets angle in degrees of vector `v`.
     * @param v target vector literal
     * @param degrees angle value to set
     * @returns `v`
     * */
    export function setAngle(v: Vector2, degrees: number): Vector2
    {
        let m = magnitudeSq(v);
        if (m > 0)
        {
            m = Math.sqrt(m);
            const radians = Angle.toRadians(degrees);
            v.x = Math.cos(radians) * m;
            v.y = Math.sin(radians) * m;
        }
        return v;
    }
    /**
     * Rotates vector `v` clockwise.
     * @param v target vector literal
     * @param angle angle to rotate by
     * @returns `v`
     * */
    export function rotate(v: Vector2, angle: Angle): Vector2
    {
        const x = v.x;
        v.x = x * angle.cos + v.y * angle.sin;
        v.y = -x * angle.sin + v.y * angle.cos;
        return v;
    }
    /**
     * Calculates cross product of vectors `v1` and `v2`.
     * @param v1 first vector literal
     * @param v2 second vector literal
     * @returns cross product of `v1` and `v2`
     * */
    export function cross(v1: DeepReadonly<Vector2>, v2: DeepReadonly<Vector2>): number
    {
        return v1.x * v2.y - v1.y * v2.x;
    }
    /**
     * Calculates dot product of vectors `v1` and `v2`.
     * @param v1 first vector literal
     * @param v2 second vector literal
     * @returns dot product of `v1` and `v2`
     * */
    export function dot(v1: DeepReadonly<Vector2>, v2: DeepReadonly<Vector2>): number
    {
        return v1.x * v2.x + v1.y * v2.y;
    }
    /**
     * Creates a deep copy of vector `v`.
     * @param v target vector literal to copy
     * @returns a copy of `v`
     * */
    export function copy(v: DeepReadonly<Vector2>): Vector2
    {
        return { x: v.x, y: v.y };
    }
    /**
     * Assigns properties from vector `other` to vector `v`.
     * @param v target vector literal
     * @param other vector literal to assign properties from
     * @returns `v`
     * */
    export function assign(v: Vector2, other: DeepReadonly<Vector2>): Vector2
    {
        v.x = other.x;
        v.y = other.y;
        return v;
    }
    /**
     * Normalizes vector `v`.
     * @param v target vector literal
     * @returns `v`
     * */
    export function normalize(v: Vector2): Vector2
    {
        let m = magnitudeSq(v);
        if (m > 0)
        {
            m = Math.sqrt(m);
            v.x /= m;
            v.y /= m;
        }
        return v;
    }
    /**
     * Adds vector `other` to vector `v`.
     * @param v target vector literal
     * @param other vector literal to add
     * @returns `v`
     * */
    export function add(v: Vector2, other: DeepReadonly<Vector2>): Vector2
    {
        v.x += other.x;
        v.y += other.y;
        return v;
    }
    /**
     * Adds `scalar` to vector `v`.
     * @param v target vector literal
     * @param scalar value to add
     * @returns `v`
     * */
    export function addScalar(v: Vector2, scalar: number): Vector2
    {
        v.x += scalar;
        v.y += scalar;
        return v;
    }
    /**
     * Subtracts vector `other` from vector `v`.
     * @param v target vector literal
     * @param other vector literal to substract
     * @returns `v`
     * */
    export function sub(v: Vector2, other: DeepReadonly<Vector2>): Vector2
    {
        v.x -= other.x;
        v.y -= other.y;
        return v;
    }
    /**
     * Substracts `scalar` from vector `v`.
     * @param v target vector literal
     * @param scalar value to substract
     * @returns `v`
     * */
    export function subScalar(v: Vector2, scalar: number): Vector2
    {
        v.x -= scalar;
        v.y -= scalar;
        return v;
    }
    /**
     * Scales vector `v` by `scalar`.
     * @param v target vector literal
     * @param scalar value to scale by
     * @returns `v`
     * */
    export function scale(v: Vector2, scalar: number): Vector2
    {
        v.x *= scalar;
        v.y *= scalar;
        return v;
    }
    /**
     * Flips vector `v` accross the y-axis.
     * @param v target vector literal
     * @returns `v`
     * */
    export function mirrorX(v: Vector2): Vector2
    {
        v.x = -v.x;
        return v;
    }
    /**
     * Flips vector `v` accross the x-axis.
     * @param v target vector literal
     * @returns `v`
     * */
    export function mirrorY(v: Vector2): Vector2
    {
        v.y = -v.y;
        return v;
    }
    /**
     * Negates vector `v`.
     * @param v target vector literal
     * @returns `v`
     * */
    export function mirror(v: Vector2): Vector2
    {
        return mirrorY(mirrorX(v));
    }
}
