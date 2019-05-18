import { Vector } from '../../core/primitives/vector';
import each from 'jest-each';

each([
    [{ x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, 1],
    [{ x: 0, y: 1 }, 1],
    [{ x: -1, y: 0 }, 1],
    [{ x: 0, y: -1 }, 1],
    [{ x: 2, y: 0 }, 4],
    [{ x: 0, y: 2 }, 4],
    [{ x: -2, y: 0 }, 4],
    [{ x: 0, y: -2 }, 4],
    [{ x: 5, y: 0 }, 25],
    [{ x: 0, y: 5 }, 25],
    [{ x: -5, y: 0 }, 25],
    [{ x: 0, y: -5 }, 25],
    [{ x: -2, y: 3 }, 13],
    [{ x: 2, y: -3 }, 13],
    [{ x: 2, y: 3 }, 13],
    [{ x: 3, y: 2 }, 13],
    [{ x: 5.5, y: 2.2 }, 35.09],
    [{ x: -2.2, y: -5.5 }, 35.09],
    [{ x: 5.5, y: -0.4 }, 30.41],
    [{ x: -0.4, y: 5.5 }, 30.41]
])
.test('magnitude sq (%#): vector: %o, expected: %f',
    (v, expected) => {
        expect(Vector.magnitudeSq(v)).toBeCloseTo(expected, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, 1],
    [{ x: 0, y: 1 }, 1],
    [{ x: -1, y: 0 }, 1],
    [{ x: 0, y: -1 }, 1],
    [{ x: 2, y: 0 }, 2],
    [{ x: 0, y: 2 }, 2],
    [{ x: -2, y: 0 }, 2],
    [{ x: 0, y: -2 }, 2],
    [{ x: 5, y: 0 }, 5],
    [{ x: 0, y: 5 }, 5],
    [{ x: -5, y: 0 }, 5],
    [{ x: 0, y: -5 }, 5],
    [{ x: -2, y: 3 }, 3.605551275],
    [{ x: 2, y: -3 }, 3.605551275],
    [{ x: 2, y: 3 }, 3.605551275],
    [{ x: 3, y: 2 }, 3.605551275],
    [{ x: 5.5, y: 2.2 }, 5.923681287],
    [{ x: -2.2, y: -5.5 }, 5.923681287],
    [{ x: 5.5, y: -0.4 }, 5.514526271],
    [{ x: -0.4, y: 5.5 }, 5.514526271]
])
.test('magnitude (%#): vector: %o, expected: %f',
    (v, expected) => {
        expect(Vector.magnitude(v)).toBeCloseTo(expected, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, 0],
    [{ x: 0, y: 1 }, 90],
    [{ x: -1, y: 0 }, 180],
    [{ x: 0, y: -1 }, 270],
    [{ x: 2, y: 0 }, 0],
    [{ x: 0, y: 2 }, 90],
    [{ x: -2, y: 0 }, 180],
    [{ x: 0, y: -2 }, 270],
    [{ x: 2, y: 2 }, 45],
    [{ x: -2, y: 2 }, 135],
    [{ x: -2, y: -2 }, 225],
    [{ x: 2, y: -2 }, 315],
    [{ x: -2, y: 3 }, 123.690067525],
    [{ x: 2, y: -3 }, 303.690067526],
    [{ x: 2, y: 3 }, 56.309932474],
    [{ x: 3, y: 2 }, 33.690067525],
    [{ x: 5.5, y: 2.2 }, 21.801409486],
    [{ x: -2.2, y: -5.5 }, 248.198590513],
    [{ x: 5.5, y: -0.4 }, 355.840357706],
    [{ x: -0.4, y: 5.5 }, 94.159642293]
])
.test('get angle (%#): vector: %o, expected: %f',
    (v, expected) => {
        let result = Vector.getAngle(v);
        if (result === -0) {
            result = 0;
        } else if (result < 0) {
            result += 360;
        }
        expect(result).toBeCloseTo(expected, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 90, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, -180, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 270, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 540, { x: 0, y: 0 }],
    [{ x: 2, y: 0 }, 90, { x: 0, y: 2 }],
    [{ x: 0, y: 2 }, -180, { x: -2, y: 0 }],
    [{ x: -2, y: 0 }, 270, { x: 0, y: -2 }],
    [{ x: 0, y: -2 }, 540, { x: -2, y: 0 }],
    [{ x: -2, y: 3 }, 45, { x: 2.549509756, y: 2.549509756 }],
    [{ x: 2, y: -3 }, -135, { x: -2.549509756, y: -2.549509756 }],
    [{ x: 2, y: 3 }, 0, { x: 3.605551275, y: 0 }],
    [{ x: 3, y: 2 }, 540, { x: -3.605551275, y: 0 }],
    [{ x: 5, y: 2 }, 10, { x: 5.303352053, y: 0.935124055 }],
    [{ x: -2, y: -5 }, -20, { x: 5.06039963, y: -1.841834839 }],
    [{ x: 5, y: 0 }, 30, { x: 4.330127018, y: 2.5 }],
    [{ x: 0, y: 5 }, -40, { x: 3.830222215, y: -3.213938048 }],
    [{ x: 5.5, y: 2.2 }, 360, { x: 5.923681287, y: 0 }],
    [{ x: -2.2, y: -5.5 }, 540, { x: -5.923681287, y: 0 }],
    [{ x: 5.5, y: -0.4 }, 700, { x: 5.181959644, y: -1.886079065 }],
    [{ x: -0.4, y: 5.5 }, -1915, { x: -2.330539507, y: -4.997858101 }]
])
.test('set angle (%#): vector: %o, degrees: %f, expected: %o',
    (v, degrees, expected) => {
        const result = Vector.setAngle(v, degrees);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 0, y: 1 }, { x: 0, y: 0 }, 0],
    [{ x: -1, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 0, y: -1 }, { x: 0, y: 0 }, 0],
    [{ x: 2, y: 0 }, { x: 2, y: 0 }, 0],
    [{ x: 0, y: 2 }, { x: 0, y: 2 }, 0],
    [{ x: -2, y: 0 }, { x: -2, y: 0 }, 0],
    [{ x: 0, y: -2 }, { x: 0, y: -2 }, 0],
    [{ x: -2, y: 3 }, { x: 2, y: -3 }, 0],
    [{ x: 2, y: -3 }, { x: -2, y: 3 }, 0],
    [{ x: 2, y: 3 }, { x: -2, y: -3 }, 0],
    [{ x: 3, y: 2 }, { x: -3, y: -2 }, 0],
    [{ x: 5, y: 2 }, { x: -1, y: 2 }, 12],
    [{ x: -2, y: -5 }, { x: -1, y: 5 }, -15],
    [{ x: 5, y: 0 }, { x: 2, y: 5 }, 25],
    [{ x: 0, y: 5 }, { x: 1, y: -3 }, -5],
    [{ x: 5.5, y: 2.2 }, { x: -0.4, y: 2.3 }, 13.53],
    [{ x: -2.2, y: -5.5 }, { x: -0.4, y: 5.5 }, -14.3],
    [{ x: 5.5, y: -0.4 }, { x: 2.3, y: 5.5 }, 31.17],
    [{ x: -0.4, y: 5.5 }, { x: 0.4, y: -3.2 }, -0.92]
])
.test('cross (%#): vector1: %o, vector2: %o, expected: %f',
    (v1, v2, expected) => {
        expect(Vector.cross(v1, v2)).toBeCloseTo(expected, 8);
    }
);

each([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 0, y: 1 }, { x: 0, y: 0 }, 0],
    [{ x: -1, y: 0 }, { x: 0, y: 0 }, 0],
    [{ x: 0, y: -1 }, { x: 0, y: 0 }, 0],
    [{ x: 2, y: 0 }, { x: 2, y: 0 }, 4],
    [{ x: 0, y: 2 }, { x: 0, y: 2 }, 4],
    [{ x: -2, y: 0 }, { x: -2, y: 0 }, 4],
    [{ x: 0, y: -2 }, { x: 0, y: -2 }, 4],
    [{ x: -2, y: 3 }, { x: 2, y: -3 }, -13],
    [{ x: 2, y: -3 }, { x: -2, y: 3 }, -13],
    [{ x: 2, y: 3 }, { x: -2, y: -3 }, -13],
    [{ x: 3, y: 2 }, { x: -3, y: -2 }, -13],
    [{ x: 5, y: 2 }, { x: -1, y: 2 }, -1],
    [{ x: -2, y: -5 }, { x: -1, y: 5 }, -23],
    [{ x: 5, y: 0 }, { x: 2, y: 5 }, 10],
    [{ x: 0, y: 5 }, { x: 1, y: -3 }, -15],
    [{ x: 5.5, y: 2.2 }, { x: -0.4, y: 2.3 }, 2.86],
    [{ x: -2.2, y: -5.5 }, { x: -0.4, y: 5.5 }, -29.37],
    [{ x: 5.5, y: -0.4 }, { x: 2.3, y: 5.5 }, 10.45],
    [{ x: -0.4, y: 5.5 }, { x: 0.4, y: -3.2 }, -17.76]
])
.test('dot (%#): vector1: %o, vector2: %o, expected: %f',
    (v1, v2, expected) => {
        expect(Vector.dot(v1, v2)).toBeCloseTo(expected, 8);
    }
);

each([
    [{ x: 0, y: 0 }],
    [{ x: 1, y: 0 }],
    [{ x: 0, y: 1 }],
    [{ x: -1, y: 0 }],
    [{ x: 0, y: -1 }],
    [{ x: 2, y: 0 }],
    [{ x: 0, y: 2 }],
    [{ x: -2, y: 0 }],
    [{ x: 0, y: -2 }],
    [{ x: 5, y: 0 }],
    [{ x: 0, y: 5 }],
    [{ x: -5, y: 0 }],
    [{ x: 0, y: -5 }],
    [{ x: -2, y: 3 }],
    [{ x: 2, y: -3 }],
    [{ x: 2, y: 3 }],
    [{ x: 3, y: 2 }],
    [{ x: 5.5, y: 2.2 }],
    [{ x: -2.2, y: -5.5 }],
    [{ x: 5.5, y: -0.4 }],
    [{ x: -0.4, y: 5.5 }]
])
.test('copy (%#): vector: %o',
    (v) => {
        const result = Vector.copy(v);
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(result).not.toBe(v);
        expect(result.x).toBe(v.x);
        expect(result.y).toBe(v.y);
    }
);

each([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }],
    [{ x: 0, y: 1 }, { x: 0, y: 0 }],
    [{ x: -1, y: 0 }, { x: 0, y: 0 }],
    [{ x: 0, y: -1 }, { x: 0, y: 0 }],
    [{ x: 2, y: 0 }, { x: 2, y: 0 }],
    [{ x: 0, y: 2 }, { x: 0, y: 2 }],
    [{ x: -2, y: 0 }, { x: -2, y: 0 }],
    [{ x: 0, y: -2 }, { x: 0, y: -2 }],
    [{ x: -2, y: 3 }, { x: 2, y: -3 }],
    [{ x: 2, y: -3 }, { x: -2, y: 3 }],
    [{ x: 2, y: 3 }, { x: -2, y: -3 }],
    [{ x: 3, y: 2 }, { x: -3, y: -2 }],
    [{ x: 5, y: 2 }, { x: -1, y: 2 }],
    [{ x: -2, y: -5 }, { x: -1, y: 5 }],
    [{ x: 5, y: 0 }, { x: 2, y: 5 }],
    [{ x: 0, y: 5 }, { x: 1, y: -3 }],
    [{ x: 5.5, y: 2.2 }, { x: -0.4, y: 2.3 }],
    [{ x: -2.2, y: -5.5 }, { x: -0.4, y: 5.5 }],
    [{ x: 5.5, y: -0.4 }, { x: 2.3, y: 5.5 }],
    [{ x: -0.4, y: 5.5 }, { x: 0.4, y: -3.2 }]
])
.test('assign (%#): vector1: %o, vector2: %o',
    (v1, v2) => {
        const result = Vector.assign(v1, v2);
        expect(result).toBe(v1);
        expect(result.x).toBe(v2.x);
        expect(result.y).toBe(v2.y);
    }
);

each([
    [{ x: 0, y: 0 }, 0, 0],
    [{ x: 1, y: 0 }, 1, 0],
    [{ x: 0, y: 1 }, 0, 1],
    [{ x: -1, y: 0 }, -1, 0],
    [{ x: 0, y: -1 }, 0, -1],
    [{ x: 2, y: 0 }, 1, 0],
    [{ x: 0, y: 2 }, 0, 1],
    [{ x: -2, y: 0 }, -1, 0],
    [{ x: 0, y: -2 }, 0, -1],
    [{ x: 5, y: 0 }, 1, 0],
    [{ x: 0, y: 5 }, 0, 1],
    [{ x: -5, y: 0 }, -1, 0],
    [{ x: 0, y: -5 }, 0, -1],
    [{ x: -2, y: 3 }, -0.554700196, 0.832050294],
    [{ x: 2, y: -3 }, 0.554700196, -0.832050294],
    [{ x: 2, y: 3 }, 0.554700196, 0.832050294],
    [{ x: 3, y: 2 }, 0.832050294, 0.554700196],
    [{ x: 5.5, y: 2.2 }, 0.92847669, 0.371390676],
    [{ x: -2.2, y: -5.5 }, -0.371390676, -0.92847669],
    [{ x: 5.5, y: -0.4 }, 0.997365816, -0.072535695],
    [{ x: -0.4, y: 5.5 }, -0.072535695, 0.997365816]
])
.test('normalize (%#): vector: %o, expected x: %f, expected y: %f',
    (v, expectedX, expectedY) => {
        const result = Vector.normalize(v);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expectedX, 8);
        expect(result.y).toBeCloseTo(expectedY, 8);
    }
);

each([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }],
    [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
    [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }],
    [{ x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
    [{ x: 2, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }],
    [{ x: 0, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 4 }],
    [{ x: -2, y: 0 }, { x: -2, y: 0 }, { x: -4, y: 0 }],
    [{ x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -4 }],
    [{ x: -2, y: 3 }, { x: 2, y: -3 }, { x: 0, y: 0 }],
    [{ x: 2, y: -3 }, { x: -2, y: 3 }, { x: 0, y: 0 }],
    [{ x: 2, y: 3 }, { x: -2, y: -3 }, { x: 0, y: 0 }],
    [{ x: 3, y: 2 }, { x: -3, y: -2 }, { x: 0, y: 0 }],
    [{ x: 5, y: 2 }, { x: -1, y: 2 }, { x: 4, y: 4 }],
    [{ x: -2, y: -5 }, { x: -1, y: 5 }, { x: -3, y: 0 }],
    [{ x: 5, y: 0 }, { x: 2, y: 5 }, { x: 7, y: 5 }],
    [{ x: 0, y: 5 }, { x: 1, y: -3 }, { x: 1, y: 2 }],
    [{ x: 5.5, y: 2.2 }, { x: -0.4, y: 2.3 }, { x: 5.1, y: 4.5 }],
    [{ x: -2.2, y: -5.5 }, { x: -0.4, y: 5.5 }, { x: -2.6, y: 0 }],
    [{ x: 5.5, y: -0.4 }, { x: 2.3, y: 5.5 }, { x: 7.8, y: 5.1 }],
    [{ x: -0.4, y: 5.5 }, { x: 0.4, y: -3.2 }, { x: 0, y: 2.3 }]
])
.test('add (%#): vector1: %o, vector2: %o, expected: %o',
    (v1, v2, expected) => {
        const result = Vector.add(v1, v2);
        expect(result).toBe(v1);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 1, { x: 1, y: 1 }],
    [{ x: 1, y: 0 }, -1, { x: 0, y: -1 }],
    [{ x: 0, y: 1 }, 2, { x: 2, y: 3 }],
    [{ x: -1, y: -1 }, -2, { x: -3, y: -3 }],
    [{ x: 2, y: 0 }, 5, { x: 7, y: 5 }],
    [{ x: 0, y: 2 }, -10, { x: -10, y: -8 }],
    [{ x: -2, y: 0 }, 0, { x: -2, y: 0 }],
    [{ x: 0, y: -2 }, 3, { x: 3, y: 1 }],
    [{ x: -2, y: 3 }, 2.5, { x: 0.5, y: 5.5 }],
    [{ x: 2, y: -3 }, -2.5, { x: -0.5, y: -5.5 }],
    [{ x: 2, y: 3 }, 1.2, { x: 3.2, y: 4.2 }],
    [{ x: 3, y: 2 }, 3.3, { x: 6.3, y: 5.3 }],
    [{ x: 5, y: 2 }, -0.4, { x: 4.6, y: 1.6 }],
    [{ x: -2, y: -5 }, -20, { x: -22, y: -25 }],
    [{ x: 5, y: 0 }, 30, { x: 35, y: 30 }],
    [{ x: 0, y: 5 }, -40, { x: -40, y: -35 }],
    [{ x: 5.5, y: 2.2 }, 5.5, { x: 11, y: 7.7 }],
    [{ x: -2.2, y: -5.5 }, 2.2, { x: 0, y: -3.3 }],
    [{ x: 5.5, y: -0.4 }, -2.2, { x: 3.3, y: -2.6 }],
    [{ x: -0.4, y: 5.5 }, 5.4, { x: 5, y: 10.9 }]
])
.test('add scalar (%#): vector: %o, scalar: %f, expected: %o',
    (v, scalar, expected) => {
        const result = Vector.addScalar(v, scalar);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }],
    [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
    [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }],
    [{ x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
    [{ x: 2, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 0 }],
    [{ x: 0, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 0 }],
    [{ x: -2, y: 0 }, { x: -2, y: 0 }, { x: 0, y: 0 }],
    [{ x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: 0 }],
    [{ x: -2, y: 3 }, { x: 2, y: -3 }, { x: -4, y: 6 }],
    [{ x: 2, y: -3 }, { x: -2, y: 3 }, { x: 4, y: -6 }],
    [{ x: 2, y: 3 }, { x: -2, y: -3 }, { x: 4, y: 6 }],
    [{ x: 3, y: 2 }, { x: -3, y: -2 }, { x: 6, y: 4 }],
    [{ x: 5, y: 2 }, { x: -1, y: 2 }, { x: 6, y: 0 }],
    [{ x: -2, y: -5 }, { x: -1, y: 5 }, { x: -1, y: -10 }],
    [{ x: 5, y: 0 }, { x: 2, y: 5 }, { x: 3, y: -5 }],
    [{ x: 0, y: 5 }, { x: 1, y: -3 }, { x: -1, y: 8 }],
    [{ x: 5.5, y: 2.2 }, { x: -0.4, y: 2.3 }, { x: 5.9, y: -0.1 }],
    [{ x: -2.2, y: -5.5 }, { x: -0.4, y: 5.5 }, { x: -1.8, y: -11 }],
    [{ x: 5.5, y: -0.4 }, { x: 2.3, y: 5.5 }, { x: 3.2, y: -5.9 }],
    [{ x: -0.4, y: 5.5 }, { x: 0.4, y: -3.2 }, { x: -0.8, y: 8.7 }]
])
.test('sub (%#): vector1: %o, vector2: %o, expected: %o',
    (v1, v2, expected) => {
        const result = Vector.sub(v1, v2);
        expect(result).toBe(v1);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 1, { x: -1, y: -1 }],
    [{ x: 1, y: 0 }, -1, { x: 2, y: 1 }],
    [{ x: 0, y: 1 }, 2, { x: -2, y: -1 }],
    [{ x: -1, y: -1 }, -2, { x: 1, y: 1 }],
    [{ x: 2, y: 0 }, 5, { x: -3, y: -5 }],
    [{ x: 0, y: 2 }, -10, { x: 10, y: 12 }],
    [{ x: -2, y: 0 }, 0, { x: -2, y: 0 }],
    [{ x: 0, y: -2 }, 3, { x: -3, y: -5 }],
    [{ x: -2, y: 3 }, 2.5, { x: -4.5, y: 0.5 }],
    [{ x: 2, y: -3 }, -2.5, { x: 4.5, y: -0.5 }],
    [{ x: 2, y: 3 }, 1.2, { x: 0.8, y: 1.8 }],
    [{ x: 3, y: 2 }, 3.3, { x: -0.3, y: -1.3 }],
    [{ x: 5, y: 2 }, -0.4, { x: 5.4, y: 2.4 }],
    [{ x: -2, y: -5 }, -20, { x: 18, y: 15 }],
    [{ x: 5, y: 0 }, 30, { x: -25, y: -30 }],
    [{ x: 0, y: 5 }, -40, { x: 40, y: 45 }],
    [{ x: 5.5, y: 2.2 }, 5.5, { x: 0, y: -3.3 }],
    [{ x: -2.2, y: -5.5 }, 2.2, { x: -4.4, y: -7.7 }],
    [{ x: 5.5, y: -0.4 }, -2.2, { x: 7.7, y: 1.8 }],
    [{ x: -0.4, y: 5.5 }, 5.4, { x: -5.8, y: 0.1 }]
])
.test('sub scalar (%#): vector: %o, scalar: %f, expected: %o',
    (v, scalar, expected) => {
        const result = Vector.subScalar(v, scalar);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, 1, { x: 0, y: 0 }],
    [{ x: 1, y: 0 }, -1, { x: -1, y: 0 }],
    [{ x: 0, y: 1 }, 2, { x: 0, y: 2 }],
    [{ x: -1, y: -1 }, -2, { x: 2, y: 2 }],
    [{ x: 2, y: 0 }, 5, { x: 10, y: 0 }],
    [{ x: 0, y: 2 }, -10, { x: 0, y: -20 }],
    [{ x: -2, y: 0 }, 0, { x: 0, y: 0 }],
    [{ x: 0, y: -2 }, 3, { x: 0, y: -6 }],
    [{ x: -2, y: 3 }, 2.5, { x: -5, y: 7.5 }],
    [{ x: 2, y: -3 }, -2.5, { x: -5, y: 7.5 }],
    [{ x: 2, y: 3 }, 1.2, { x: 2.4, y: 3.6 }],
    [{ x: 3, y: 2 }, 3.3, { x: 9.9, y: 6.6 }],
    [{ x: 5, y: 2 }, -0.4, { x: -2, y: -0.8 }],
    [{ x: -2, y: -5 }, -20, { x: 40, y: 100 }],
    [{ x: 5, y: 0 }, 30, { x: 150, y: 0 }],
    [{ x: 0, y: 5 }, -40, { x: 0, y: -200 }],
    [{ x: 5.5, y: 2.2 }, 5.5, { x: 30.25, y: 12.1 }],
    [{ x: -2.2, y: -5.5 }, 2.2, { x: -4.84, y: -12.1 }],
    [{ x: 5.5, y: -0.4 }, -2.2, { x: -12.1, y: 0.88 }],
    [{ x: -0.4, y: 5.5 }, 5.4, { x: -2.16, y: 29.7 }]
])
.test('scale (%#): vector: %o, scalar: %f, expected: %o',
    (v, scalar, expected) => {
        const result = Vector.scale(v, scalar);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expected.x, 8);
        expect(result.y).toBeCloseTo(expected.y, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, -1],
    [{ x: 0, y: 1 }, 0],
    [{ x: -1, y: 0 }, 1],
    [{ x: 0, y: -1 }, 0],
    [{ x: 2, y: 0 }, -2],
    [{ x: 0, y: 2 }, 0],
    [{ x: -2, y: 0 }, 2],
    [{ x: 0, y: -2 }, 0],
    [{ x: 5, y: 0 }, -5],
    [{ x: 0, y: 5 }, 0],
    [{ x: -5, y: 0 }, 5],
    [{ x: 0, y: -5 }, 0],
    [{ x: -2, y: 3 }, 2],
    [{ x: 2, y: -3 }, -2],
    [{ x: 2, y: 3 }, -2],
    [{ x: 3, y: 2 }, -3],
    [{ x: 5.5, y: 2.2 }, -5.5],
    [{ x: -2.2, y: -5.5 }, 2.2],
    [{ x: 5.5, y: -0.4 }, -5.5],
    [{ x: -0.4, y: 5.5 }, 0.4]
])
.test('mirror x (%#): vector: %o, expected x: %f',
    (v, expectedX) => {
        const y: number = v.y;
        const result = Vector.mirrorX(v);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expectedX, 8);
        expect(result.y).toBe(y);
    }
);

each([
    [{ x: 0, y: 0 }, 0],
    [{ x: 1, y: 0 }, 0],
    [{ x: 0, y: 1 }, -1],
    [{ x: -1, y: 0 }, 0],
    [{ x: 0, y: -1 }, 1],
    [{ x: 2, y: 0 }, 0],
    [{ x: 0, y: 2 }, -2],
    [{ x: -2, y: 0 }, 0],
    [{ x: 0, y: -2 }, 2],
    [{ x: 5, y: 0 }, 0],
    [{ x: 0, y: 5 }, -5],
    [{ x: -5, y: 0 }, 0],
    [{ x: 0, y: -5 }, 5],
    [{ x: -2, y: 3 }, -3],
    [{ x: 2, y: -3 }, 3],
    [{ x: 2, y: 3 }, -3],
    [{ x: 3, y: 2 }, -2],
    [{ x: 5.5, y: 2.2 }, -2.2],
    [{ x: -2.2, y: -5.5 }, 5.5],
    [{ x: 5.5, y: -0.4 }, 0.4],
    [{ x: -0.4, y: 5.5 }, -5.5]
])
.test('mirror y (%#): vector: %o, expected y: %f',
    (v, expectedY) => {
        const x: number = v.x;
        const result = Vector.mirrorY(v);
        expect(result).toBe(v);
        expect(result.x).toBe(x);
        expect(result.y).toBeCloseTo(expectedY, 8);
    }
);

each([
    [{ x: 0, y: 0 }, 0, 0],
    [{ x: 1, y: 0 }, -1, 0],
    [{ x: 0, y: 1 }, 0, -1],
    [{ x: -1, y: 0 }, 1, 0],
    [{ x: 0, y: -1 }, 0, 1],
    [{ x: 2, y: 0 }, -2, 0],
    [{ x: 0, y: 2 }, 0, -2],
    [{ x: -2, y: 0 }, 2, 0],
    [{ x: 0, y: -2 }, 0, 2],
    [{ x: 5, y: 0 }, -5, 0],
    [{ x: 0, y: 5 }, 0, -5],
    [{ x: -5, y: 0 }, 5, 0],
    [{ x: 0, y: -5 }, 0, 5],
    [{ x: -2, y: 3 }, 2, -3],
    [{ x: 2, y: -3 }, -2, 3],
    [{ x: 2, y: 3 }, -2, -3],
    [{ x: 3, y: 2 }, -3, -2],
    [{ x: 5.5, y: 2.2 }, -5.5, -2.2],
    [{ x: -2.2, y: -5.5 }, 2.2, 5.5],
    [{ x: 5.5, y: -0.4 }, -5.5, 0.4],
    [{ x: -0.4, y: 5.5 }, 0.4, -5.5]
])
.test('mirror (%#): vector: %o, expected x: %f, expected y: %f',
    (v, expectedX, expectedY) => {
        const result = Vector.mirror(v);
        expect(result).toBe(v);
        expect(result.x).toBeCloseTo(expectedX, 8);
        expect(result.y).toBeCloseTo(expectedY, 8);
    }
);