import { Plus, Calendar, Users, Hash, Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

export function EventManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">イベント管理</h2>
          <p className="text-gray-600">イベントの作成・参加者管理・単位付与を行えます</p>
        </div>
        <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
          <Plus className="size-4" />
          新規イベント作成
        </Button>
      </div>

      {/* 統計 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">今月開催</p>
          <p className="text-gray-900 text-2xl">8件</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">総参加者</p>
          <p className="text-gray-900 text-2xl">324名</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">平均参加率</p>
          <p className="text-gray-900 text-2xl">78%</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">付与単位数</p>
          <p className="text-gray-900 text-2xl">1,420</p>
        </Card>
      </div>

      {/* 開催予定イベント */}
      <Card className="p-6">
        <h3 className="text-gray-900 mb-4">開催予定イベント</h3>
        
        <div className="space-y-3">
          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">中級スキルアップ研修</h4>
                  <Badge className="bg-purple-600">C単位</Badge>
                  <Badge variant="outline">募集中</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>2026年1月15日 14:00-17:00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>申込: 45/60名</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">取得単位: 3単位（カテゴリーC）</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">編集</Button>
                <Button variant="outline" size="sm">詳細</Button>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-blue-200">
              <Hash className="size-4 text-blue-600" />
              <span className="text-sm text-gray-700">参加コード: <strong>ABC123</strong></span>
              <Button variant="outline" size="sm" className="ml-auto">コピー</Button>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">実践ワークショップ</h4>
                  <Badge className="bg-blue-600">A単位</Badge>
                  <Badge variant="outline">募集中</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>2026年1月22日 10:00-16:00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>申込: 28/40名</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">取得単位: 5単位（カテゴリーA）</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">編集</Button>
                <Button variant="outline" size="sm">詳細</Button>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-blue-200">
              <Hash className="size-4 text-blue-600" />
              <span className="text-sm text-gray-700">参加コード: <strong>DEF456</strong></span>
              <Button variant="outline" size="sm" className="ml-auto">コピー</Button>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">オンライン専門講座</h4>
                  <Badge className="bg-purple-600">B単位</Badge>
                  <Badge className="bg-green-600">開催中</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>2025年11月20日 13:00-15:00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>参加: 52名</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">取得単位: 2単位（カテゴリーB）</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">参加者一覧</Button>
                <Button className="bg-green-600 hover:bg-green-700" size="sm">単位付与</Button>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-green-200">
              <Hash className="size-4 text-green-600" />
              <span className="text-sm text-gray-700">参加コード: <strong>GHI789</strong></span>
              <Button variant="outline" size="sm" className="ml-auto">コピー</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* 過去のイベント */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">過去のイベント</h3>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="size-4" />
            レポート出力
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700">イベント名</th>
                <th className="text-left py-3 px-4 text-gray-700">開催日</th>
                <th className="text-left py-3 px-4 text-gray-700">カテゴリー</th>
                <th className="text-left py-3 px-4 text-gray-700">参加者</th>
                <th className="text-left py-3 px-4 text-gray-700">単位</th>
                <th className="text-left py-3 px-4 text-gray-700">付与状況</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">実践ワークショップ</td>
                <td className="py-3 px-4 text-gray-900">2025/11/15</td>
                <td className="py-3 px-4">
                  <Badge className="bg-blue-600">A</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">48名</td>
                <td className="py-3 px-4 text-gray-900">5単位</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">完了</Badge>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">専門研修プログラム</td>
                <td className="py-3 px-4 text-gray-900">2025/10/20</td>
                <td className="py-3 px-4">
                  <Badge className="bg-purple-600">B</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">35名</td>
                <td className="py-3 px-4 text-gray-900">3単位</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">完了</Badge>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">スキルアップセミナー</td>
                <td className="py-3 px-4 text-gray-900">2025/09/10</td>
                <td className="py-3 px-4">
                  <Badge className="bg-orange-600">C</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">62名</td>
                <td className="py-3 px-4 text-gray-900">2単位</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">完了</Badge>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">オンライン講座</td>
                <td className="py-3 px-4 text-gray-900">2025/08/05</td>
                <td className="py-3 px-4">
                  <Badge className="bg-blue-600">A</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">78名</td>
                <td className="py-3 px-4 text-gray-900">2単位</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">完了</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* 単位付与確認 */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-gray-900 mb-3">単位付与確認コード</h3>
        <p className="text-gray-700 text-sm mb-4">
          会員が入力した参加コードを確認し、単位を付与します
        </p>
        <div className="flex gap-2">
          <Input placeholder="参加コードを入力" className="flex-1" />
          <Button className="bg-blue-600 hover:bg-blue-700">確認・付与</Button>
        </div>
      </Card>
    </div>
  );
}
